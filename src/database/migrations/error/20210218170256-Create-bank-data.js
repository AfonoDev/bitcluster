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
      idUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tblUser',
            key: 'idUser'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblDadosBancario", {})
  }
};
