'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_cliente: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      id_repartidor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      fecha_pedido: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      total: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
      },
      fecha_entrega: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      metodo_pago: {
        type: Sequelize.DataTypes.STRING,
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
    down: (queryInterface) => queryInterface.dropTable('pedidos'),
  }