import { Environment } from '../types/database';
import { CloudflareImagesUploadResult, CloudflareImagesGetResult } from '../types/cloudflare-images';

async function generateImageId(imageUrl: string): Promise<string> {
  // Create a hash of the URL to use as Cloudflare Images ID
  const encoder = new TextEncoder();
  const data = encoder.encode(imageUrl);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return `gameye-${hash}`;
}

async function uploadToCloudflareImages(env: Environment, imageUrl: string, imageId: string): Promise<string | null> {
  try {
    // First, fetch the image from GAMEYE
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Braxton-Game-Collection/1.0',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const imageData = await response.arrayBuffer();
    
    // Upload to Cloudflare Images
    const formData = new FormData();
    formData.append('file', new Blob([imageData]), 'image.webp');
    formData.append('id', imageId);
    formData.append('metadata', JSON.stringify({
      originalUrl: imageUrl,
      uploadedAt: new Date().toISOString(),
    }));
    
    const uploadResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.CLOUDFLARE_IMAGES_TOKEN}`,
        },
        body: formData,
      }
    );
    
    if (!uploadResponse.ok) {
      console.error('Failed to upload to Cloudflare Images:', await uploadResponse.text());
      return null;
    }
    
    const uploadResult = await uploadResponse.json() as CloudflareImagesUploadResult;
    
    if (uploadResult.result?.id) {
      // Return the 'games' variant URL for proper sizing
      return `https://imagedelivery.net/${env.CLOUDFLARE_ACCOUNT_ID}/${uploadResult.result.id}/games`;
    }
    
    return null;
  } catch (error) {
    console.error('Error uploading to Cloudflare Images:', error);
    return null;
  }
}

export async function getImageProxy(request: Request, env: Environment): Promise<Response> {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get('url');
  
  if (!imageUrl) {
    return new Response('Missing image URL parameter', { status: 400 });
  }
  
  // Validate that it's a GAMEYE image URL
  if (!imageUrl.startsWith('https://dt.gameye.app/data/streaming/images/')) {
    return new Response('Invalid image URL', { status: 400 });
  }
  
  const imageId = await generateImageId(imageUrl);
  
  // Check if Cloudflare Images is configured
  if (!env.CLOUDFLARE_ACCOUNT_ID || !env.CLOUDFLARE_IMAGES_TOKEN) {
    // Fall back to direct proxy if not configured
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Braxton-Game-Collection/1.0',
      },
    });
    
    if (!response.ok) {
      return new Response('Failed to fetch image', { status: response.status });
    }
    
    return new Response(response.body, {
      headers: {
        'Content-Type': response.headers.get('content-type') || 'image/webp',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
  
  try {
    // First, check if we already have this image in Cloudflare Images
    const checkResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/images/v1/${imageId}`,
      {
        headers: {
          'Authorization': `Bearer ${env.CLOUDFLARE_IMAGES_TOKEN}`,
        },
      }
    );
    
    if (checkResponse.ok) {
      const imageData = await checkResponse.json() as CloudflareImagesGetResult;
      
      if (imageData.result?.id) {
        // Use the 'games' variant for proper sizing
        const gameVariantUrl = `https://imagedelivery.net/${env.CLOUDFLARE_ACCOUNT_ID}/${imageData.result.id}/games`;
        
        // Test the URL before redirecting
        const testResponse = await fetch(gameVariantUrl, { method: 'HEAD' });
        if (testResponse.ok) {
          return Response.redirect(gameVariantUrl, 302);
        } else {
          console.error(`Failed to access games variant: ${testResponse.status} for URL: ${gameVariantUrl}`);
          // Fall back to the first available variant
          const fallbackUrl = imageData.result.variants?.[0];
          if (fallbackUrl) {
            return Response.redirect(fallbackUrl, 302);
          }
        }
      }
    }
    
    // If not found, upload it and then redirect
    const uploadedUrl = await uploadToCloudflareImages(env, imageUrl, imageId);
    
    if (uploadedUrl) {
      // Test the uploaded URL before redirecting
      const testResponse = await fetch(uploadedUrl, { method: 'HEAD' });
      if (testResponse.ok) {
        return Response.redirect(uploadedUrl, 302);
      } else {
        console.error(`Failed to access uploaded games variant: ${testResponse.status} for URL: ${uploadedUrl}`);
      }
    }
    
    // If upload fails, fall back to direct proxy
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Braxton-Game-Collection/1.0',
      },
    });
    
    if (!response.ok) {
      return new Response('Failed to fetch image', { status: response.status });
    }
    
    return new Response(response.body, {
      headers: {
        'Content-Type': response.headers.get('content-type') || 'image/webp',
        'Cache-Control': 'public, max-age=86400', // 24 hours for fallback
      },
    });
    
  } catch (error) {
    console.error('Error proxying image:', error);
    return new Response('Internal server error', { status: 500 });
  }
}