require('dotenv').config();
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

// Define los atributos del modelo Usuario
interface UsuarioAttributes {
  id: number;
  nombre_usuario: string;
  contrasena: string;
  correo: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define los atributos opcionales al crear (id no es requerido)
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

class Usuario
  extends Model<UsuarioAttributes, UsuarioCreationAttributes>
  implements UsuarioAttributes {
  public id!: number;
  public nombre_usuario!: string;
  public contrasena!: string;
  public correo!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const sequelize = new Sequelize("elotazodb", "root", "1234", {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });
  
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
    {
      sequelize,
      modelName: 'usuario',
      tableName: 'usuarios', // Cambia según el nombre de tu tabla
    }
  );
  
  export default Usuario;  