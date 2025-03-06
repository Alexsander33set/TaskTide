/*
  Warnings:

  - You are about to drop the column `order` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Task` table. All the data in the column will be lost.
  - Added the required column `order` to the `Column` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" DROP COLUMN "order";

-- AlterTable
ALTER TABLE "Column" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "color",
ADD COLUMN     "lastUpdatedBy" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
