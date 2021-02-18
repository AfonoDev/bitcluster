const Sequelize = require('sequelize');
const dbConfig = require('../config/datebase')

const conexao = new Sequelize(dbConfig);


module.exports = conexao;