const { CompanyRepository } = require("../repositories");

class CompanyController {
  companyRepository;
  constructor() {
    this.companyRepository = new CompanyRepository();
  }
  create = async (req, res) => {
    await this.companyRepository.create(req.body.company);
    return res.json(req.body.company);
  };
  findAll = async (req, res) => {
    const companies = await this.companyRepository.findAll();
    return res.json(companies);
  };
  findById = async (req, res) => {
    const company = await this.companyRepository.findById(
      parseInt(req.params.id)
    );
    return res.json(company);
  };
  update = async (req, res) => {
    await this.companyRepository.update({
      where: { id: parseInt(req.params.id) },
      data: req.body.company,
    });
    return res.json(req.body.company);
  };
  delete = async (req, res) => {
    await this.companyRepository.delete(parseInt(req.params.id));
    return res.json(req.params.id);
  };
  verifyPassword = async (req, res) => {
    let company = await this.companyRepository.verifyPassword(
      req.body.password,
      req.body.email
    );
    if (company) {
      return res.json({ exists: true, company: company });
    } else {
      return res.json({ exists: false });
    }
  };
}

module.exports = CompanyController;
