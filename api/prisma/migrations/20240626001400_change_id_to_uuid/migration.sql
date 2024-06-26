-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL,
    "username" VARCHAR,
    "email" VARCHAR,
    "cnpj" VARCHAR,
    "password" TEXT,
    "cellphone" VARCHAR,
    "role" INTEGER,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Batch" (
    "id" INTEGER NOT NULL,
    "adress_id" INTEGER,
    "area" DOUBLE PRECISION,
    "description" TEXT,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyBatch" (
    "id" INTEGER NOT NULL,
    "company_id" INTEGER,
    "batch_id" INTEGER,

    CONSTRAINT "CompanyBatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" INTEGER NOT NULL,
    "street" VARCHAR,
    "cep" VARCHAR,
    "neighborhood" VARCHAR,
    "state" VARCHAR,
    "complement" VARCHAR,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BatchImages" (
    "id" INTEGER NOT NULL,
    "img" TEXT,
    "batch_id" INTEGER,

    CONSTRAINT "BatchImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR,
    "email" VARCHAR,
    "cpf" VARCHAR,
    "password" TEXT,
    "cellphone" VARCHAR,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "Adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CompanyBatch" ADD CONSTRAINT "CompanyBatch_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CompanyBatch" ADD CONSTRAINT "CompanyBatch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "BatchImages" ADD CONSTRAINT "BatchImages_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "Batch"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
