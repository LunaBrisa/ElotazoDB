const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configura body-parser para recibir datos JSON
app.use(bodyParser.json());

// Configura la conexión con la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto con tu usuario de MySQL
    password: '300105', // Cambia esto con tu contraseña de MySQL
    database: 'elotazodb' // Cambia esto con el nombre de tu base de datos
});

// Conecta a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Endpoint para guardar la dirección
app.post('/guardar_direccion', (req, res) => {
    const { colonia, calle, codigo, numero, id_persona } = req.body;

    if (!colonia || !calle || !codigo || !numero || !id_persona) {
        return res.status(400).json({ success: false, message: 'Faltan campos requeridos' });
    }

    // SQL para insertar la dirección en la base de datos
    const query = 'INSERT INTO direccion (colonia, calle, codigo, numero, id_persona) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [colonia, calle, codigo, numero, id_persona], (err, result) => {
        if (err) {
            console.error('Error al guardar la dirección:', err);
            return res.status(500).json({ success: false, message: 'Error al guardar la dirección' });
        }

        res.json({ success: true, message: 'Dirección guardada con éxito.' });
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
