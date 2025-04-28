type GenreField =
  | "checksum"
  | "created_at"
  | "name"
  | "slug"
  | "updated_at"
  | "url";

interface Genre {
  id: number;
  checksum: string;
  created_at: Date;
  name: string;
  slug: string;
  updated_at: Date;
  url: string;
}

interface ExternalGenre extends Omit<Genre, "created_at" | "updated_at"> {
  created_at: number;
  updated_at: number;
}
