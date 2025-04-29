import { Platform } from "@/generated/prisma";

export type platformFields =
  | "abbreviation"
  | "alternative_name"
  | "checksum"
  | "created_at"
  | "generation"
  | "name"
  | "platform_family"
  | "platform_logo"
  | "platform_type"
  | "slug"
  | "summary"
  | "updated_at"
  | "url"
  | "versions"
  | "websites";

export interface ExternalPlatform
  extends Omit<Platform, "created_at" | "updated_at"> {
  created_at: number;
  updated_at: number;
}
