/*
  Warnings:

  - You are about to drop the column `coverId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_coverId_fkey";

-- DropIndex
DROP INDEX "Game_coverId_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "coverId",
ADD COLUMN     "coverUrl" TEXT;

-- DropTable
DROP TABLE "File";
