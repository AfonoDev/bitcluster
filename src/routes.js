const express = require('express');


const routes = express.Router();
const usuarioController = require('./controller/usuario')


routes.post("/usuario", usuarioController.store);
routes.get('/usuario', usuarioController.list);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);

module.exports = routes;