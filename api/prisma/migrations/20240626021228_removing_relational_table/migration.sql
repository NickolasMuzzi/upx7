/*
  Warnings:

  - You are about to drop the `CompanyBatch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyBatch" DROP CONSTRAINT "CompanyBatch_batch_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyBatch" DROP CONSTRAINT "CompanyBatch_company_id_fkey";

-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "ownerEmail" VARCHAR;

-- DropTable
DROP TABLE "CompanyBatch";
