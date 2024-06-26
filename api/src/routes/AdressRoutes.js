const { Router } = require("express");
const { AdressController } = require("../controllers");

const adressController = new AdressController();

const adressRoutes = Router();

adressRoutes.get("/", adressController.findAll);
adressRoutes.get("/:id", adressController.findById);
adressRoutes.delete("/:id", adressController.delete);
adressRoutes.put("/:id", adressController.update);

module.exports = adressRoutes;
