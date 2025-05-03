/*
  Warnings:

  - Changed the type of `platform_family` on the `Platform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `platform_logo` on the `Platform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `platform_type` on the `Platform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Platform" DROP COLUMN "platform_family",
ADD COLUMN     "platform_family" INTEGER NOT NULL,
DROP COLUMN "platform_logo",
ADD COLUMN     "platform_logo" INTEGER NOT NULL,
DROP COLUMN "platform_type",
ADD COLUMN     "platform_type" INTEGER NOT NULL;
