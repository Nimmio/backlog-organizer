-- CreateTable
CREATE TABLE "Platform" (
    "id" INTEGER NOT NULL,
    "abbreviation" TEXT,
    "alternative_name" TEXT,
    "checksum" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "generation" INTEGER,
    "name" TEXT,
    "platform_family" INTEGER[],
    "platform_logo" INTEGER[],
    "platform_type" INTEGER[],
    "slug" TEXT,
    "summary" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT,
    "versions" INTEGER[],
    "websites" INTEGER[],

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);
