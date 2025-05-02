/*
  Warnings:

  - You are about to drop the column `genre` on the `GameUser` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `GameUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GameUser" DROP COLUMN "genre",
DROP COLUMN "releaseDate";
