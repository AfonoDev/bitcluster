'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblContrato",{
      idContrato:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      horaExtra:{
        type: Sequelize.TINYINT,
        allowNull: false
      },
      salarioPorMes:{
        type: Sequelize.STRING,
        allowNull: false
      },
      salarioPorDia:{
        type: Sequelize.STRING,
        allowNull: false
      },
      timeInicioExpediente:{
        type: Sequelize.STRING,
        allowNull: false
      },
      timeFinalExpediente:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cargo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      idUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tblUser',
            key: 'idUser'
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblContrato", {})
  }
};
