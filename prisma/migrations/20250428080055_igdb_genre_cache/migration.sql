-- CreateTable
CREATE TABLE "IGDBGenreCache" (
    "id" INTEGER NOT NULL,
    "checksum" TEXT NOT NULL,
    "external_created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "external_updated_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "IGDBGenreCache_pkey" PRIMARY KEY ("id")
);
