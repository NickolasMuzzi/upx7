const { PrismaClient } = require("@prisma/client");

class AdressRepository {
  prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }

  create = async (adress) => {
    return await this.prisma.adress.create(adress);
  };
  findById = async (adressId) => {
    return await this.prisma.adress.findUniqueOrThrow({
      where: {
        id: adressId,
      },
    });
  };
  findAll = async () => {
    return await this.prisma.adress.findMany();
  };
  update = async (adress) => {
    return await this.prisma.adress.update(adress);
  };
  delete = async (adressId) => {
    return await this.prisma.adress.delete({ where: { id: adressId } });
  };
}

module.exports = AdressRepository;
