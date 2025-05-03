/*
  Warnings:

  - You are about to drop the `IGDBGenreCache` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "IGDBGenreCache";

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL,
    "checksum" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);
