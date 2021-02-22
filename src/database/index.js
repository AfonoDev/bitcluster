const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');

const Datetime = require('../models/Datetime')

const Endereco = require('../models/Endereco')

const conexao = new Sequelize(dbConfig);

Usuario.init(conexao)
Datetime.init(conexao)
Endereco.init(conexao)

Usuario.associate(conexao.models)
Datetime.associate(conexao.models)
Endereco.associate(conexao.models)

module.exports = conexao;