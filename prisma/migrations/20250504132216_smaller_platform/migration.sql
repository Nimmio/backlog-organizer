/*
  Warnings:

  - You are about to drop the column `alpha_channel` on the `Cover` table. All the data in the column will be lost.
  - You are about to drop the column `animated` on the `Cover` table. All the data in the column will be lost.
  - You are about to drop the column `game_localization` on the `Cover` table. All the data in the column will be lost.
  - You are about to drop the column `abbreviation` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `alternative_name` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `generation` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `platform_family` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `platform_logo` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `platform_type` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `Platform` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Platform` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cover" DROP COLUMN "alpha_channel",
DROP COLUMN "animated",
DROP COLUMN "game_localization";

-- AlterTable
ALTER TABLE "Platform" DROP COLUMN "abbreviation",
DROP COLUMN "alternative_name",
DROP COLUMN "generation",
DROP COLUMN "platform_family",
DROP COLUMN "platform_logo",
DROP COLUMN "platform_type",
DROP COLUMN "slug",
DROP COLUMN "summary",
DROP COLUMN "url";
