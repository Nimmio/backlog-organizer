/*
  Warnings:

  - You are about to drop the `GameUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameUser" DROP CONSTRAINT "GameUser_igdbGameId_fkey";

-- DropForeignKey
ALTER TABLE "GameUser" DROP CONSTRAINT "GameUser_userId_fkey";

-- DropTable
DROP TABLE "GameUser";

-- CreateTable
CREATE TABLE "Gamestatus" (
    "id" SERIAL NOT NULL,
    "platform" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'TO_PLAY',
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "igdbGameId" INTEGER,

    CONSTRAINT "Gamestatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gamestatus" ADD CONSTRAINT "Gamestatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamestatus" ADD CONSTRAINT "Gamestatus_igdbGameId_fkey" FOREIGN KEY ("igdbGameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
