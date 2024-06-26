const { Router } = require("express");
const { CompanyController } = require("../controllers");
const companyController = new CompanyController();

const companyRoutes = Router();

companyRoutes.get("/", companyController.findAll);
companyRoutes.get("/:id", companyController.findById);
companyRoutes.delete("/:id", companyController.delete);
companyRoutes.put("/:id", companyController.update);
companyRoutes.post("/", companyController.create);
companyRoutes.post("/login", companyController.verifyPassword);

module.exports = companyRoutes;
