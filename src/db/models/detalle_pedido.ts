require('dotenv').config();
import {DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize("elotazodb", "root", "300105", ({
    host: process.env.DB_HOST,
    dialect: 'mysql'
}));

const DetallePedido = sequelize.define("detalle_pedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'pedidos',
            key: 'id'
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    precio_unitario:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    subtotal:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
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
export default DetallePedido;