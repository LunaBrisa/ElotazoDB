import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/index';
import path from 'path';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); 

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', router);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
