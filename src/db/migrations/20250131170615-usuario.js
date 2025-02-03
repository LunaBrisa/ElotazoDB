'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_usuario: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      correo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      contrasena: {
        type: Sequelize.DataTypes.STRING(100),
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
  down: (queryInterface) => queryInterface.dropTable('usuario'),
}