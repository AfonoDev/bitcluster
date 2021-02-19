const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');

const Datetime = require('../models/Datetime')

const conexao = new Sequelize(dbConfig);

Usuario.init(conexao)
Datetime.init(conexao)

Usuario.associate(conexao.models)
Datetime.associate(conexao.models)

module.exports = conexao;