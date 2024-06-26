const { BatchRepository } = require("../repositories");

class BatchController {
  batchRepository;
  constructor() {
    this.batchRepository = new BatchRepository();
  }
  create = async (req, res) => {
    await this.batchRepository.create(req.body.batch);
    return res.json(req.body.batch);
  };
  update = async (req, res) => {
    await this.batchRepository.update({
      where: { id: req.params.id },
      data: req.body.batch,
    });
    return res.json(req.body.batch);
  };
  delete = async (req, res) => {
    this.batchRepository.delete(parseInt(req.params.id));
    return res.json(req.params.id);
  };
  findAll = async (req, res) => {
    const batches = await this.batchRepository.findAll();
    return res.json(batches);
  };
  findById = async (req, res) => {
    const batch = await this.batchRepository.findById(parseInt(req.params.id));
    return res.json(batch);
  };
  findByOwnerEmail = async (req, res) => {
    const batch = await this.batchRepository.findByOwnerEmail(
      req.query.ownerEmail
    );
    return res.json(batch);
  };
}

module.exports = BatchController;
