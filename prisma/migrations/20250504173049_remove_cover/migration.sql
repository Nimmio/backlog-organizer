/*
  Warnings:

  - You are about to drop the column `coverId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `videos` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `Cover` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `checksum` on table `Platform` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Platform` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_coverId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "coverId",
DROP COLUMN "videos",
ADD COLUMN     "hasCover" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "checksum" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Platform" ALTER COLUMN "checksum" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Cover";
