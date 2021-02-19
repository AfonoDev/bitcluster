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
        allowNull: true
      },
      tipo:{
        type: Sequelize.STRING,
        allowNull: true
      },
      conta:{
        type: Sequelize.STRING,
        allowNull: true
      },
      banco:{
        type: Sequelize.STRING,
        allowNull: true
      },
      dadosPix:{
        type: Sequelize.STRING,
        allowNull: true
      },
      receberViaPix:{
        type: Sequelize.TINYINT,
        allowNull: true
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
