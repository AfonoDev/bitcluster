const express = require('express');

const usuarioController = require('./controller/usuario')

const routes = express.Router();


routes.post("/usuario", usuarioController.store);
routes.get('/usuario', usuarioController.list);

module.exports = routes;