// Cloudflare Images API response types
export interface CloudflareImagesUploadResult {
  success: boolean;
  result?: {
    id: string;
    filename: string;
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
    meta?: Record<string, any>;
  };
  errors?: Array<{
    code: number;
    message: string;
  }>;
}

export interface CloudflareImagesGetResult {
  success: boolean;
  result?: {
    id: string;
    filename: string;
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
    meta?: Record<string, any>;
  };
  errors?: Array<{
    code: number;
    message: string;
  }>;
}