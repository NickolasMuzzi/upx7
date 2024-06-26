const { AdressRepository } = require("../repositories");

class AdressController {
  adressRepository;
  constructor() {
    this.adressRepository = new AdressRepository();
  }
  create = async (req, res) => {
    await this.adressRepository.create(req.body.adress);
    return res.json(req.body.adress);
  };

  update = async (req, res) => {
    await this.adressRepository.update({
      where: { id: parseInt(req.params.id) },
      data: req.body.adress,
    });
    return res.json(req.body.adress);
  };

  delete = async (req, res) => {
    await this.adressRepository.delete(parseInt(req.params.id));
    return res.json(req.params.id);
  };

  findAll = async (req, res) => {
    const adresses = await this.adressRepository.findAll();
    return res.json(adresses);
  };

  findById = async (req, res) => {
    const adress = await this.adressRepository.findById(
      parseInt(req.params.id)
    );
    return res.json(adress);
  };
}

module.exports = AdressController;
