// GAMEYE API response types based on example.json
export interface GameyeImage {
  ID: number;
  Width: number;
  Height: number;
  File: string;
  BlurHash: string;
  Attribution: string | null;
}

export interface GameyeImages {
  [key: string]: GameyeImage[];
}

export interface GameyePrice {
  Loose: number;
  CIB: number;
  New: number;
  ManualPrice: number;
  BoxPrice: number;
  BoxedPrice: number;
  as_of: string;
}

export interface GameyeGameSpecific {
  num_players: number;
  co_op: boolean;
  rating_id: number;
}

export interface GameyeHltb {
  main_story: number;
  main_sides: number;
  completionist: number;
  all_styles: number;
}

export interface GameyeLink {
  Type: string;
  Link: string;
  LinkGuess: string;
}

export interface GameyeUserCount {
  count: number;
  record_type: number;
}

export interface GameyeItem {
  creator_user_id: number | null;
  item_id: number;
  category_id: number;
  title: string;
  platform_id: number;
  country_id: number;
  release_date: number;
  release_type: number;
  item_state: number;
  genres: number[];
  pubs: number[];
  devs: number[];
  overview: string;
  images: GameyeImages;
  documentation: any;
  price: GameyePrice;
  game_specific: GameyeGameSpecific;
  alt_titles: string[];
  mc: any;
  hltb: GameyeHltb;
  links: GameyeLink[];
  users_with_item_counts: GameyeUserCount[];
  exe_time: number;
  error: string | null;
}
