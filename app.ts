import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import router from './src/routes/index'; 


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); 

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', router);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
