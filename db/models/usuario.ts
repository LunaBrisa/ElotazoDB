require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "1234", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_usuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
},{
});
export default Usuario;