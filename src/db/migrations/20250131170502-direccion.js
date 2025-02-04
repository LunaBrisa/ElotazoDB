'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('direccion', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      col: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      calle: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      numero_ex: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      id_persona: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'personas',
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
  down: (queryInterface) => queryInterface.dropTable('direccion'),
}