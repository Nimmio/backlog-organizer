/*
  Warnings:

  - You are about to drop the column `hasCover` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coverId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coverId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "hasCover",
ADD COLUMN     "coverId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_coverId_key" ON "Game"("coverId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
