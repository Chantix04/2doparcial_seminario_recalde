import { DataTypes } from "sequelize";
import { sequelize } from "./db/database.js";

export const Usuarios = sequelize.define( 'perfiles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomUsuario: {
        type: DataTypes.CHAR(30),
        allowNull: false
    },
    perfil: {
        type: DataTypes.CHAR(30),
        allowNull:false
    },
    activo: {
        type: DataTypes.BOOLEAN(),
        default: true
    }
},{
    timestamps:false
})

Usuarios.sync({force: false})