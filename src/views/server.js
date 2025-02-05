const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: "localhost",   
    user: "root",        
    password: "300105",      
    database: "ElotazoDB" 
});

db.connect(err => {
    if (err) {
        console.error("Error al conectar con MySQL:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});


app.post("/guardar_direccion", (req, res) => {
    const { colonia, calle, codigo, numero, id_persona } = req.body;

    if (!colonia || !calle || !codigo || !numero || !id_persona) {
        return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
    }

    const sql = "INSERT INTO DIRECCION (COL, CALLE, CODIGO, NUMERO_EX, ID_PERSONA) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [colonia, calle, codigo, numero, id_persona], (err, result) => {
        if (err) {
            console.error("Error al guardar en la base de datos:", err);
            return res.status(500).json({ success: false, message: "Error al guardar la dirección" });
        }
        res.json({ success: true, message: "Dirección guardada con éxito" });
    });
});


app.listen(3333, () => {
    console.log("Servidor corriendo en http://localhost:3333");
});
