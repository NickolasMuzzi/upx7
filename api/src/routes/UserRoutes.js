const { Router } = require("express");
const { UserController } = require("../controllers");
const userController = new UserController();

const userRoutes = Router();

userRoutes.get("/", userController.findAll);
userRoutes.delete("/:id", userController.delete);
userRoutes.put("/:id", userController.update);
userRoutes.get("/:id", userController.findById);
userRoutes.post("/", userController.create);
userRoutes.post("/login", userController.verifyPassword);
module.exports = userRoutes;
