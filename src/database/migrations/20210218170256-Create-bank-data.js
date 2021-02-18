'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblDadosBancario",{
      idDadosBancarios:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      agencia:{
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      conta:{
        type: Sequelize.STRING,
        allowNull: false
      },
      banco:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dadosPix:{
        type: Sequelize.STRING,
        allowNull: false
      },
      receberViaPix:{
        type: Sequelize.TINYINT,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblDadosBancario", {})
  }
};
