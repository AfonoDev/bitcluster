'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("datetime",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      inicio_time:{
        type: Sequelize.DATE,
        allowNull: false
      },
      fim_time:{
        type: Sequelize.DATE,
        allowNull: false
      },
      horas_extras_salvo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      falta:{
        type: Sequelize.STRING,
        allowNull: false
      },
      pago:{
        type: Sequelize.TINYINT,
        allowNull: false
      },
      usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("datetime", {})
  }
};
