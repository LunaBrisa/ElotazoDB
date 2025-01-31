'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('detalle_pedido', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_pedido: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      id_producto: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      precio_unitario: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      subtotal: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
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

  down: (queryInterface) => queryInterface.dropTable('detalle_pedido'),
}
