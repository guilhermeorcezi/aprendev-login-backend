const { Router } = require("express");
const UserController = require("./Controller/userController");

const routes = Router();

routes.post("/login", UserController.store);

module.exports = routes;
