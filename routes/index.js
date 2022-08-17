const Controller = require("../controllers/controller");
const routes = require("express").Router();

routes.get("/", Controller.loginPage);
// routes.get("/register", (req, res));

module.exports = routes;
