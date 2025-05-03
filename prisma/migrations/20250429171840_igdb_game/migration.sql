/*
  Warnings:

  - You are about to drop the column `genre` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Game` table. All the data in the column will be lost.
  - Added the required column `aggregated_rating` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aggregated_rating_count` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checksum` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_release_date` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `franchise` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_status` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_type` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hypes` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_game` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating_count` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storyline` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_rating` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_rating_count` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version_title` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_userId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "genre",
DROP COLUMN "notes",
DROP COLUMN "platform",
DROP COLUMN "releaseDate",
DROP COLUMN "status",
DROP COLUMN "userId",
ADD COLUMN     "age_ratings" INTEGER[],
ADD COLUMN     "aggregated_rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "aggregated_rating_count" INTEGER NOT NULL,
ADD COLUMN     "alternative_names" INTEGER[],
ADD COLUMN     "artworks" INTEGER[],
ADD COLUMN     "bundles" INTEGER[],
ADD COLUMN     "checksum" INTEGER NOT NULL,
ADD COLUMN     "collections" INTEGER[],
ADD COLUMN     "cover" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dlcs" INTEGER[],
ADD COLUMN     "expanded_games" INTEGER[],
ADD COLUMN     "expansions" INTEGER[],
ADD COLUMN     "external_games" INTEGER[],
ADD COLUMN     "first_release_date" INTEGER NOT NULL,
ADD COLUMN     "forks" INTEGER[],
ADD COLUMN     "franchise" INTEGER NOT NULL,
ADD COLUMN     "franchises" INTEGER[],
ADD COLUMN     "game_engines" INTEGER[],
ADD COLUMN     "game_localizations" INTEGER[],
ADD COLUMN     "game_modes" INTEGER[],
ADD COLUMN     "game_status" INTEGER NOT NULL,
ADD COLUMN     "game_type" INTEGER NOT NULL,
ADD COLUMN     "genres" INTEGER[],
ADD COLUMN     "hypes" INTEGER NOT NULL,
ADD COLUMN     "involved_companies" INTEGER[],
ADD COLUMN     "keywords" INTEGER[],
ADD COLUMN     "language_supports" INTEGER[],
ADD COLUMN     "multiplayer_modes" INTEGER[],
ADD COLUMN     "parent_game" INTEGER NOT NULL,
ADD COLUMN     "platforms" INTEGER[],
ADD COLUMN     "player_perspectives" INTEGER[],
ADD COLUMN     "ports" INTEGER[],
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rating_count" INTEGER NOT NULL,
ADD COLUMN     "release_dates" INTEGER[],
ADD COLUMN     "remakes" INTEGER[],
ADD COLUMN     "remasters" INTEGER[],
ADD COLUMN     "screenshots" INTEGER[],
ADD COLUMN     "similar_games" INTEGER[],
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "standalone_expansions" INTEGER[],
ADD COLUMN     "storyline" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "tags" INTEGER[],
ADD COLUMN     "themes" INTEGER[],
ADD COLUMN     "total_rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_rating_count" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "version_parent" INTEGER[],
ADD COLUMN     "version_title" TEXT NOT NULL,
ADD COLUMN     "videos" INTEGER[],
ADD COLUMN     "websites" INTEGER[],
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Game_id_seq";

-- CreateTable
CREATE TABLE "GameUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'TO_PLAY',
    "genre" TEXT,
    "releaseDate" TIMESTAMP(3),
    "notes" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GameUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
