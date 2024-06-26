const { PrismaClient } = require("@prisma/client");
class BatchRepository {
  prisma = new PrismaClient();

  create = async (batch) => {
    return await this.prisma.batch.create({ data: batch });
  };
  update = async (batch) => {
    return await this.prisma.batch.update(batch);
  };
  delete = async (batchId) => {
    return await this.prisma.batch.delete({ where: { id: batchId } });
  };
  findById = async (batchId) => {
    return await this.prisma.batch.findUniqueOrThrow({
      where: { id: batchId },
    });
  };
  findByOwnerEmail = async (ownerEmail) => {
    if (ownerEmail == "null") {
      ownerEmail = null;
    }
    return await this.prisma.batch.findMany({
      where: { ownerEmail: ownerEmail },
    });
  };
  findAll = async () => {
    return await this.prisma.batch.findMany();
  };
}

module.exports = BatchRepository;
