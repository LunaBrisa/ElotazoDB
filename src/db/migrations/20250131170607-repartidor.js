'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('repartidor', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nss: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      rfc: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
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
    down: (queryInterface) => queryInterface.dropTable('repartidor'),
  }