-- CreateTable
CREATE TABLE "Cover" (
    "id" INTEGER NOT NULL,
    "alpha_channel" BOOLEAN,
    "animated" BOOLEAN,
    "checksum" TEXT,
    "game" INTEGER,
    "game_localization" INTEGER[],
    "height" INTEGER,
    "image_id" TEXT,
    "url" TEXT,
    "width" INTEGER,

    CONSTRAINT "Cover_pkey" PRIMARY KEY ("id")
);
