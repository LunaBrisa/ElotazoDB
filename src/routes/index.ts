import express from 'express';
import { registrarCliente, registrarRepartidor } from '../controllers/registerControllers'; // Importa el controlador

const router = express.Router();

router.get('/registro', (req, res) => {
    res.render('registerc'); 
});

router.post('/registrar', async (req, res) => {
    await registrarCliente(req, res);
});

router.get('/registrorepa', (req, res) => {
    res.render('registerr'); 
});

router.post('/registrarepa', async (req, res) => {
    await registrarRepartidor(req, res);
});

router.get('/', (req, res) => {
    res.render('inicio');
});

export default router;
