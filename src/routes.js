const express = require('express');


const routes = express.Router();
const usuarioController = require('./controller/usuario')
const enderecoController = require('./controller/endereco')
const bancoController = require('./controller/Banco')
const autoizacaoMid = require('./middlewares/autorizacao')
routes.post("/usuario", usuarioController.store);
routes.get('/usuario', usuarioController.list);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);

routes.use(autoizacaoMid);

routes.post("/endereco", enderecoController.store);
routes.put("/endereco/:id", enderecoController.update);

routes.post('/banco', bancoController.store);
routes.put('/banco/:id', bancoController.update);

module.exports = routes;