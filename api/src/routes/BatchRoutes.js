const { Router } = require("express");
const { BatchController } = require("../controllers");
const batchController = new BatchController();

const batchRoutes = Router();

batchRoutes.get("/findByEmail", batchController.findByOwnerEmail);
batchRoutes.get("/", batchController.findAll);
batchRoutes.get("/:id", batchController.findById);
batchRoutes.delete("/:id", batchController.delete);
batchRoutes.put("/:id", batchController.update);
batchRoutes.post("/", batchController.create);

module.exports = batchRoutes;
