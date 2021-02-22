const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');

const Datetime = require('../models/Datetime')

const Endereco = require('../models/Endereco')


const Banco = require('../models/Banco')

const conexao = new Sequelize(dbConfig);

Usuario.init(conexao)
Datetime.init(conexao)
Endereco.init(conexao)
Banco.init(conexao)

Usuario.associate(conexao.models)
Datetime.associate(conexao.models)
Endereco.associate(conexao.models)
Banco.associate(conexao.models)

module.exports = conexao;