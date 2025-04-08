/*
  Warnings:

  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WANT_TO_BUY', 'PREORDER', 'TO_PLAY', 'PLAYING', 'COMPLETED', 'DROPPED');

-- DropTable
DROP TABLE "game";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'TO_PLAY',

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
