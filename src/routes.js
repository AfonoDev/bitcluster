const express = require('express');


const routes = express.Router();
const usuarioController = require('./controller/usuario')


routes.post("/usuario", usuarioController.store);
routes.get('/usuario', usuarioController.list);

module.exports = routes;