const { UserRepository } = require("../repositories");

class UserController {
  userRpository;
  constructor() {
    this.userRpository = new UserRepository();
  }
  create = async (req, res) => {
    await this.userRpository.create(req.body.user);
    return res.json(req.body.user);
  };
  findAll = async (req, res) => {
    const users = await this.userRpository.findAll();
    return res.json(users);
  };
  findById = async (req, res) => {
    const user = await this.userRpository.findById(parseInt(req.params.id));
    return res.json(user);
  };
  findByEmail = async (req, res) => {
    const user = await this.userRpository.findByEmail(req.body.email);
    return res.json(user);
  };
  update = async (req, res) => {
    await this.userRpository.update({
      where: { id: parseInt(req.params.id) },
      data: req.body.user,
    });
    return res.json(req.body.user);
  };
  delete = async (req, res) => {
    await this.userRpository.delete(parseInt(req.params.id));
    return res.json(req.params.id);
  };
  verifyPassword = async (req, res) => {
    const userPassword = await this.userRpository.verifyPassword(
      req.body.password,
      req.body.email
    );
    if (userPassword) {
      return res.json({ exists: true, user: userPassword });
    } else {
      return res.json({ exists: false });
    }
  };
}

module.exports = UserController;
