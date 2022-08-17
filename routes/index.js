const Controller = require("../controllers/controller");
const routes = require("express").Router();

routes.get("/", Controller.loginPage);
routes.get("/register", Controller.registerPage);

routes.get("/dashboard", Controller.dashboard);

module.exports = routes;
