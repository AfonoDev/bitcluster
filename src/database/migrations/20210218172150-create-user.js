'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblUser",{
      idUser:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dataNasc:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(15),
        allowNull: false
      },
      roles:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      idEndereco:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tblEndereco',
            key: 'idEndereco',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idContrato:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tblContrato',
            key: 'idContrato'
        },
      },
      idDadosBanco:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tblDadosBancario',
            key: 'idDadosBancarios'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblUser", {})
  }
};
