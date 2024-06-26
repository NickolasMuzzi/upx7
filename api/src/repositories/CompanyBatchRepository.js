const { PrismaClient } = require("@prisma/client");
class CompanyBatchRepository {
  prisma = new PrismaClient();

  create = async (companyBatch) => {
    return await this.prisma.companyBatch.create(companyBatch);
  };
  update = async (companyBatch) => {
    return await this.prisma.companyBatch.update(companyBatch);
  };
  delete = async (companyBatchId) => {
    return await this.prisma.companyBatch.delete({ where: { id: companyBatchId } });
  };
  findById = async (companyBatchId) => {
    return await this.prisma.companyBatch.findUniqueOrThrow({
      where: { id: companyBatchId },
    });
  };
  findByCompanyId = async (companyId) => {
    return await this.prisma.companyBatch.findMany({
      where: { company_id: companyId },
    });
  };
  findCompanyByBatchId = async (batchId) => {
    return await this.prisma.companyBatch.findMany({
      where: { batch_id: batchId },
    });
  };
}
module.exports = CompanyBatchRepository;
