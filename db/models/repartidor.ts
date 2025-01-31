require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "1234", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const Repartidor = sequelize.define("repartidor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nss: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

},
{});
export default Repartidor;