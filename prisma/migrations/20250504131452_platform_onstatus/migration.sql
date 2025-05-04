/*
  Warnings:

  - You are about to drop the column `platform` on the `GameStatus` table. All the data in the column will be lost.
  - Made the column `igdbGameId` on table `GameStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "GameStatus" DROP CONSTRAINT "GameStatus_igdbGameId_fkey";

-- AlterTable
ALTER TABLE "GameStatus" DROP COLUMN "platform",
ADD COLUMN     "platformId" INTEGER,
ALTER COLUMN "igdbGameId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "GameStatus" ADD CONSTRAINT "GameStatus_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameStatus" ADD CONSTRAINT "GameStatus_igdbGameId_fkey" FOREIGN KEY ("igdbGameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
