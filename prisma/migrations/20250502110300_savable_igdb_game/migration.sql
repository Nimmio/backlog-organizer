/*
  Warnings:

  - A unique constraint covering the columns `[igdbGameId]` on the table `GameUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GameUser" ADD COLUMN     "igdbGameId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "GameUser_igdbGameId_key" ON "GameUser"("igdbGameId");

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_igdbGameId_fkey" FOREIGN KEY ("igdbGameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
