/*
  Warnings:

  - You are about to drop the column `external_created_at` on the `IGDBGenreCache` table. All the data in the column will be lost.
  - You are about to drop the column `external_updated_at` on the `IGDBGenreCache` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `IGDBGenreCache` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `IGDBGenreCache` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IGDBGenreCache" DROP COLUMN "external_created_at",
DROP COLUMN "external_updated_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
