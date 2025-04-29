-- AlterTable
ALTER TABLE "Platform" ALTER COLUMN "platform_family" DROP NOT NULL,
ALTER COLUMN "platform_logo" DROP NOT NULL,
ALTER COLUMN "platform_type" DROP NOT NULL;
