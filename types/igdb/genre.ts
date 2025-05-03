import { Genre } from "@/generated/prisma";

export type GenreField =
  | "checksum"
  | "created_at"
  | "name"
  | "slug"
  | "updated_at"
  | "url";

export interface ExternalGenre
  extends Omit<Genre, "created_at" | "updated_at"> {
  created_at: number;
  updated_at: number;
}
