const express = require('express');
const mysql = require('mysql2/promise');
const morgan = require('morgan')
const cors = require('cors')

const app = express();

const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'swarmdb',
});

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/insertar_con_rest', async (req, res) => {
    try {
        const { nomUsuario, perfil, activo } = req.body;
        console.log(req.body)
        const [rows] = await pool.query(
            "INSERT INTO perfiles(nomUsuario, perfil, activo) VALUES (?, ?, ?)",
            [nomUsuario, perfil, activo]
        );
        res.json({
            msg: 'Insertado correctamente',
            id: rows.insertId,
            nomUsuario,
            perfil,
            activo
        });
    } catch (error) {
        return res.json({ msg: "Algo salio mal", error });
    }
});

app.get('/consultar_con_rest', async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM perfiles");
        console.log(rows)
        res.json({ok:true, msg: "Perfiles:", rows });
    } catch (error) {
        console.log(error)
        return res.json({ msg: "Algo salio mal" });
        
    }
});

app.listen(5050, () => {
    console.log(`Servidor REST en funcionamiento en el puerto 5050`);
});
