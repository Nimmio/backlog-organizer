/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Cover` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Platform` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "GameUser_igdbGameId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Cover_id_key" ON "Cover"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_id_key" ON "Genre"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_id_key" ON "Platform"("id");
