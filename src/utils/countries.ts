// Country mapping based on country_id from the database
export interface Country {
  id: number;
  name: string;
  flag: string;
  shortName: string;
}

const COUNTRIES: Record<number, Country> = {
  1: { id: 1, name: 'United States', flag: '🇺🇸', shortName: 'USA' },
  3: { id: 3, name: 'Japan', flag: '🇯🇵', shortName: 'Japan' },
  15: { id: 15, name: 'United Kingdom', flag: '🇬🇧', shortName: 'UK' },
  34: { id: 34, name: 'World', flag: '🌍', shortName: 'World' },
};

export function getCountryName(countryId: number | null): string {
  if (!countryId || !COUNTRIES[countryId]) {
    return 'Unknown';
  }
  return COUNTRIES[countryId].name;
}

export function getCountryFlag(countryId: number | null): string {
  if (!countryId || !COUNTRIES[countryId]) {
    return '🏳️';
  }
  return COUNTRIES[countryId].flag;
}

export function getShortCountryName(countryId: number | null): string {
  if (!countryId || !COUNTRIES[countryId]) {
    return 'Unknown';
  }
  return COUNTRIES[countryId].shortName;
}

export function getAllCountries(): Country[] {
  return Object.values(COUNTRIES);
}