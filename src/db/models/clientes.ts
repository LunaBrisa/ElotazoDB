require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "300105", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const Clientes = sequelize.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id'
        }
    },
    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: DataTypes.DATE,
    },

},{

});
export default Clientes;