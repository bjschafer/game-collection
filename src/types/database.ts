export interface OwnershipRecord {
  id: number;
  item_id: number;
  platform_id: number;
  country_id: number;
  ownership_mask: number;
  item_quality: number | null;
  manual_quality: number | null;
  box_quality: number | null;
  paid: number | null;
  sold: number | null;
  note: string | null;
  created_at: number;
  updated_at: number;
  category_id: number;
  user_record_type: number;
  title: string;
  uuid: string;
  generation_id: number;
  collection_id: number;
}

export interface OwnershipRecordWithPlatform extends OwnershipRecord {
  platform_name: string;
  platform_name_short: string;
  platform_icon: string;
  country_name: string;
  country_flag: string;
}

export interface BacklogRecord {
  id: number;
  play_status_id: number;
  start_date_seconds: number | null;
  end_date_seconds: number | null;
  duration_seconds: number | null;
  note: string | null;
  item_id: number;
  platform_id: number;
  country_id: number | null;
  uuid: string;
  generation_id: number;
  collection_id: number;
  title: string;
  created_at_seconds: number;
  updated_at_seconds: number;
}

export interface Tag {
  tag_id: number;
  tag: string;
  color_id: number;
  uuid: string;
  created_at: number;
  updated_at: number;
  generation_id: number;
  collection_id: number;
}

export interface Environment {
  DB: D1Database;
  GAMEYE_CACHE: KVNamespace;
  CLOUDFLARE_IMAGES_TOKEN?: string;
  CLOUDFLARE_ACCOUNT_ID?: string;
}
