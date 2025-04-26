-- AlterTable
ALTER TABLE "UserSettings" ALTER COLUMN "theme" SET DEFAULT 'SYSTEM';

-- CreateTable
CREATE TABLE "IGDBAuth" (
    "id" SERIAL NOT NULL,
    "access_token" TEXT,
    "expires" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IGDBAuth_pkey" PRIMARY KEY ("id")
);
