/*
  Warnings:

  - You are about to drop the column `age_ratings` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `aggregated_rating` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `aggregated_rating_count` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `alternative_names` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `artworks` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `bundles` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `collections` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `dlcs` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `expanded_games` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `expansions` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `external_games` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `forks` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `franchise` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `franchises` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `game_engines` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `game_localizations` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `game_modes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `game_status` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `game_type` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `hypes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `involved_companies` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `language_supports` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `multiplayer_modes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `parent_game` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `player_perspectives` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `ports` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `rating_count` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `release_dates` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `remakes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `remasters` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `screenshots` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `similar_games` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `standalone_expansions` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `storyline` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `themes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `total_rating` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `total_rating_count` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `version_parent` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `version_title` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `websites` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Genre` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "age_ratings",
DROP COLUMN "aggregated_rating",
DROP COLUMN "aggregated_rating_count",
DROP COLUMN "alternative_names",
DROP COLUMN "artworks",
DROP COLUMN "bundles",
DROP COLUMN "collections",
DROP COLUMN "dlcs",
DROP COLUMN "expanded_games",
DROP COLUMN "expansions",
DROP COLUMN "external_games",
DROP COLUMN "forks",
DROP COLUMN "franchise",
DROP COLUMN "franchises",
DROP COLUMN "game_engines",
DROP COLUMN "game_localizations",
DROP COLUMN "game_modes",
DROP COLUMN "game_status",
DROP COLUMN "game_type",
DROP COLUMN "hypes",
DROP COLUMN "involved_companies",
DROP COLUMN "keywords",
DROP COLUMN "language_supports",
DROP COLUMN "multiplayer_modes",
DROP COLUMN "parent_game",
DROP COLUMN "player_perspectives",
DROP COLUMN "ports",
DROP COLUMN "rating",
DROP COLUMN "rating_count",
DROP COLUMN "release_dates",
DROP COLUMN "remakes",
DROP COLUMN "remasters",
DROP COLUMN "screenshots",
DROP COLUMN "similar_games",
DROP COLUMN "slug",
DROP COLUMN "standalone_expansions",
DROP COLUMN "storyline",
DROP COLUMN "tags",
DROP COLUMN "themes",
DROP COLUMN "total_rating",
DROP COLUMN "total_rating_count",
DROP COLUMN "url",
DROP COLUMN "version_parent",
DROP COLUMN "version_title",
DROP COLUMN "websites";

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "slug",
DROP COLUMN "url";
