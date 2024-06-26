const { Router } = require("express");
const userRoutes = require("./UserRoutes");
const batchRoutes = require("./BatchRoutes");
const companyRoutes = require("./CompanyRoutes");
const adressRoutes = require("./AdressRoutes");

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/adress", adressRoutes);
routes.use("/batch", batchRoutes);
routes.use("/company", companyRoutes);

module.exports = routes;
