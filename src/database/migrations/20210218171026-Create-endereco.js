'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblEndereco",{
      idEndereco:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false
      },
      numero:{
        type: Sequelize.STRING,
        allowNull: false
      },
      complemento:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblEndereco", {})
  }
};
