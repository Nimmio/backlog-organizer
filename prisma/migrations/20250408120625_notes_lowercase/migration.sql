/*
  Warnings:

  - You are about to drop the column `Notes` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "Notes",
ADD COLUMN     "notes" TEXT;
