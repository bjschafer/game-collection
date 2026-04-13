import { getVgpcPlatformSlug } from './platforms';

function slugifyTitle(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics (é → e, etc.)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove punctuation
    .trim()
    .replace(/\s+/g, '-') // spaces to hyphens
    .replace(/-+/g, '-'); // collapse repeated hyphens
}

export function getVgpcUrl(title: string, platformId: number | null): string | null {
  const platformSlug = getVgpcPlatformSlug(platformId);
  if (!platformSlug) return null;
  const titleSlug = slugifyTitle(title);
  if (!titleSlug) return null;
  return `https://www.pricecharting.com/game/${platformSlug}/${titleSlug}`;
}
