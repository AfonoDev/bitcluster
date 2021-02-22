'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("endereco",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: true
      },
      numero:{
        type: Sequelize.STRING,
        allowNull: true
      },
      complemento:{
        type: Sequelize.STRING,
        allowNull: true
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: true
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: true
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: true
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id',
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("endereco", {})
  }
};
