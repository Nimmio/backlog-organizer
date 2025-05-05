-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_coverId_fkey";

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "coverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
