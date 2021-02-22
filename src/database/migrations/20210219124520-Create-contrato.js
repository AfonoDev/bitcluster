'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("contrato",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      hora_extra:{
        type: Sequelize.TINYINT,
        allowNull: false
      },
      salario_por_mes:{
        type: Sequelize.STRING,
        allowNull: false
      },
      salario_por_dia:{
        type: Sequelize.STRING,
        allowNull: false
      },
      time_inicio_expediente:{
        type: Sequelize.STRING,
        allowNull: false
      },
      time_final_expediente:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cargo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      id_user:{
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
    return queryInterface.dropTable("contrato", {})
  }
};
