import express  from "express";
import { environments } from "./db/environments.js";
import { conectarDB } from "./db/database.js";
import { Usuarios } from "./model.js";
import cors from 'cors'
const app = express();

conectarDB();

//MIDDLEWARES

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//RUTAS

app.post("/insertar_con_rest", async (req, res) => {
  const { nomUsuario, perfil, activo } = req.body;

  try {
    const profile = await Usuarios.create({
      nomUsuario,
      perfil,
      activo,
    });

    app.usuario = await profile.save();
    return res.status(201).json(app.usuario)

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.message
    })
  }

});


app.listen(environments.PORT, () => {
  console.log(`Servidor REST en ejecución en puerto:${environments.PORT}`);
});
