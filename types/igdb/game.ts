import { Game, GameStatus, Platform } from "@/generated/prisma";

export type GameField =
  | "age_ratings"
  | "aggregated_rating"
  | "aggregated_rating_count"
  | "alternative_names"
  | "artworks"
  | "bundles"
  | "checksum"
  | "collections"
  | "cover"
  | "created_at"
  | "dlcs"
  | "expanded_games"
  | "expansions"
  | "external_games"
  | "first_release_date"
  | "forks"
  | "franchise"
  | "franchises"
  | "game_engines"
  | "game_localizations"
  | "game_modes"
  | "game_status"
  | "game_type"
  | "genres"
  | "hypes"
  | "involved_companies"
  | "keywords"
  | "language_supports"
  | "multiplayer_modes"
  | "name"
  | "parent_game"
  | "platforms"
  | "player_perspectives"
  | "ports"
  | "rating"
  | "rating_count"
  | "release_dates"
  | "remakes"
  | "remasters"
  | "screenshots"
  | "similar_games"
  | "slug"
  | "standalone_expansions"
  | "storyline"
  | "summary"
  | "tags"
  | "themes"
  | "total_rating"
  | "total_rating_count"
  | "updated_at"
  | "url"
  | "version_parent"
  | "version_title"
  | "videos"
  | "websites";

export interface ExternalGame extends Omit<Game, "created_at" | "updated_at"> {
  created_at: number;
  updated_at: number;
  platforms: number[];
  genres: number[];
  cover?: { url: string; id: number };
}

export interface GameStatusWithIgdbGame extends GameStatus {
  igdbGame?: Game & { platforms: Platform[] };
  platform?: Platform | undefined;
}

export interface SearchGame {
  name: string;
  first_release_date: number;
  id: number;
  cover?: {
    url: string;
  };
  summary?: string;
  genres: {
    name: string;
    id: number;
  }[];
  platforms: {
    name: string;
    id: number;
  }[];
}

export interface SearchGameDetails {
  name: string;
  first_release_date: number;
  id: number;
  cover: string | number | undefined;
  summary: string;
  platforms: string[];
  genres: string[];
}
