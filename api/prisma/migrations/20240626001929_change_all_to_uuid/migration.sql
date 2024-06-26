/*
  Warnings:

  - The primary key for the `Adress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Batch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BatchImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CompanyBatch` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_adress_id_fkey";

-- DropForeignKey
ALTER TABLE "BatchImages" DROP CONSTRAINT "BatchImages_batch_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyBatch" DROP CONSTRAINT "CompanyBatch_batch_id_fkey";

-- AlterTable
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Adress_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "adress_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Batch_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BatchImages" DROP CONSTRAINT "BatchImages_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "batch_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BatchImages_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CompanyBatch" DROP CONSTRAINT "CompanyBatch_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "batch_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CompanyBatch_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "Adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CompanyBatch" ADD CONSTRAINT "CompanyBatch_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "BatchImages" ADD CONSTRAINT "BatchImages_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
