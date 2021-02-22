'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("bandodedados",{
      id:{
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
      banco_nome:{
        type: Sequelize.STRING,
        allowNull: true
      },
      dados_pix:{
        type: Sequelize.STRING,
        allowNull: true
      },
      receber_via_pix:{
        type: Sequelize.TINYINT,
        allowNull: true
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bandodedados", {})
  }
};
