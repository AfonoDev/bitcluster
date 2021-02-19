'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuarios",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nasc:{
        type: Sequelize.STRING(20),
        allowNull: true
      },
      telefone:{
        type: Sequelize.STRING(15),
        allowNull: true
      },
      roles:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuarios", {})
  }
};
