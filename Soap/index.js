const express = require('express');
const app = express();
const soap = require('soap');
const mysql = require('mysql2/promise');
const cors = require('cors')

const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'swarmdb',
});


const consultarUsuarios = async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM perfiles");
        console.log(rows)
        return { usuarios: rows }
    } catch (error) {
        console.log(error)
        return { msg: 'Algo salio mal' };
    }
};


app.use(express.static(__dirname));
app.use(cors());

app.listen(4000, () => {
  console.log('Servidor SOAP escuchando en el puerto 4000');
});

const xml = require('fs').readFileSync('consultarUsuarios.wsdl', 'utf8');

const serviceObject = {
  ConsultarUsuariosService: {
    ConsultarUsuariosPort: {
      consultarUsuarios: consultarUsuarios
    },
  },
};


soap.listen(app, '/consultar_con_soap', serviceObject, xml);