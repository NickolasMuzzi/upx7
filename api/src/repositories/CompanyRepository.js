const { PrismaClient } = require("@prisma/client");
class CompanyRepository {
  prisma = new PrismaClient();

  create = async (company) => {
    return await this.prisma.company.create({ data: company });
  };
  findAll = async () => {
    return await this.prisma.company.findMany();
  };
  findById = async (companyId) => {
    return await this.prisma.company.findUniqueOrThrow({
      where: { id: companyId },
    });
  };
  update = async (company) => {
    return await this.prisma.company.update(company);
  };
  delete = async (companyId) => {
    return await this.prisma.company.delete({ where: { id: companyId } });
  };
  verifyPassword = async (companyPassword, companyEmail) => {
    return await this.prisma.company.findMany({
      where: { password: companyPassword, email: companyEmail },
    });
  };
}
module.exports = CompanyRepository;
