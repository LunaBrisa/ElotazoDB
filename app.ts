import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/index'; // Asegúrate de que la ruta sea correcta

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // ✅ Necesario para procesar JSON en `req.body`
app.use('/', router); // ✅ Asegúrate de usar un prefijo adecuado

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
