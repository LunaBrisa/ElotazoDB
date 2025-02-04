'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('productos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      precio_u: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM('activo', 'inactivo'),
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
    down: (queryInterface) => queryInterface.dropTable('productos'),
  }