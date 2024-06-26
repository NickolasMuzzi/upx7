/*
  Warnings:

  - You are about to drop the column `adress_id` on the `Batch` table. All the data in the column will be lost.
  - You are about to drop the `Adress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_adress_id_fkey";

-- AlterTable
ALTER TABLE "Batch" DROP COLUMN "adress_id",
ADD COLUMN     "adress" TEXT;

-- DropTable
DROP TABLE "Adress";
