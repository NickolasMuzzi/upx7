const { PrismaClient } = require("@prisma/client");
class BatchImagesRepository {
  prisma = new PrismaClient();

  create = async (batchImages) => {
    return await this.prisma.batchImages.create(batchImages);
  };
  delete = async (batchImagesId) => {
    return await this.prisma.batchImages.delete({
      where: { id: batchImagesId },
    });
  };
  update = async (batchImages) => {
    return await this.prisma.batchImages.update(batchImages);
  };
  findById = async (batchImagesId) => {
    return await this.prisma.batchImages.findUniqueOrThrow({
      where: { id: batchImagesId },
    });
  };
  findByBatchId = async (batchId) => {
    return await this.prisma.batchImages.findMany({
      where: { batch_id: batchId },
    });
  };
  findAll = async () => {
    return await this.prisma.batchImages.findMany();
  };
}

module.exports = BatchImagesRepository;
