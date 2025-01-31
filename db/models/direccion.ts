require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "1234", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const Direccion = sequelize.define("direccion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    col: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_ex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_persona:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
});
export default Direccion;
