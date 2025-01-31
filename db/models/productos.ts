require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "1234", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const Productos = sequelize.define("productos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio_u: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{});
export default Productos;