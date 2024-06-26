const { PrismaClient } = require("@prisma/client");

class UserRepository {
  prisma = new PrismaClient();

  create = async (user) => {
    return await this.prisma.users.create({
      data: {
        username: user.username,
        email: user.email,
        cpf: user.cpf,
        password: user.password,
        cellphone: user.cellphone,
      },
    });
  };
  findById = async (userId) => {
    return await this.prisma.users.findUniqueOrThrow({ where: { id: userId } });
  };

  findAll = async () => {
    return await this.prisma.users.findMany();
  };
  update = async (user) => {
    return await this.prisma.users.update(user);
  };
  delete = async (userId) => {
    return await this.prisma.users.delete({ where: { id: userId } });
  };
  verifyPassword = async (userPassword, userEmail) => {
    return await this.prisma.users.findFirst({
      where: { password: userPassword, email: userEmail },
    });
  };
}

module.exports = UserRepository;
