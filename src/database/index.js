const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');

const conexao = new Sequelize(dbConfig);

Usuario.associate(conexao.models)

module.exports = conexao;