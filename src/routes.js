const { Router } = require ('express');
const UserController = require ('./Controller/userController');


const routes = Router();

routes.post('/register', UserController.store);

module.exports = routes;