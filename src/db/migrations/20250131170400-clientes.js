'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
  down: (queryInterface) => queryInterface.dropTable('clientes'),
}