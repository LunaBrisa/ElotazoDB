'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('personas', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      a_p: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      a_m: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      fecha_nac: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      type: Sequelize.DataTypes.DATE,
      },
    }),
    down: (queryInterface) => queryInterface.dropTable('personas'),
  }