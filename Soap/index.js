const express = require("express");
const soap = require("soap");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const PORT = 8888;

const dbConnInfo = {
  name: "swarmdb",
  user: "root",
  password: "root",
  host: "mysql-service",
  dialect: "mysql",
};

const sequelize = new Sequelize(
  dbConnInfo.name,
  dbConnInfo.user,
  dbConnInfo.password,
  {
    host: dbConnInfo.host,
    dialect: dbConnInfo.dialect,
  }
);

const Usuarios = sequelize.define(
  "perfiles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomUsuario: {
      type: DataTypes.CHAR(30),
      allowNull: false,
    },
    perfil: {
      type: DataTypes.CHAR(30),
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN(),
      default: true,
    },
  },
  {
    timestamps: false,
  }
);
sequelize.sync();

app.use(cors());
app.options("/consultar_con_soap", cors());

const consultarUsuarios = async (args, callback) => {
  try {
    const users = await Usuarios.findAll();
    const listarPerfiles = users.map(({ id, nomUsuario, perfil, activo }) => ({
      id: id.toString(),
      nomUsuario,
      perfil,
      activo,
    }));
    callback(null, { listarPerfiles });
  } catch (error) {
    console.error("Error al consultar la base de datos: ", error);
    callback(error);
  }
};

app.listen(PORT, () => {
  console.log(`Servidor SOAP funciona en el puerto ${PORT}`);
});

const xml = require("fs").readFileSync("consultarUsuarios.wsdl", "utf8");

const serviceObject = {
  ConsultarUsuariosService: {
    ConsultarUsuariosPort: {
      ConsultarUsuarios: consultarUsuarios,
    },
  },
};

soap.listen(app, "/consultar_con_soap", serviceObject, xml);
