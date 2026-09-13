import { PLATFORM_LOGOS } from '../assets/platforms';

export function getIcon(filename: string): Response {
  // Keep older API clients' PNG URLs working while serving the new artwork.
  const key = filename.replace(/\.png$/, '.svg');
  const svg = Object.prototype.hasOwnProperty.call(PLATFORM_LOGOS, key)
    ? PLATFORM_LOGOS[key]
    : PLATFORM_LOGOS['generic.svg'];

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
