'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblDateTime",{
      idDateTime:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      },
      InicioTime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      fimTime:{
        type: Sequelize.DATE,
        allowNull: false
      },
      horasExtrasSalvo:{
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
    return queryInterface.dropTable("tblDateTime", {})
  }
};
