import express from 'express';
import { registrarCliente, registrarRepartidor } from '../controllers/registerControllers';
import {login, verificarToken} from '../controllers/authController';    
import {nuevaDireccion} from '../controllers/direccionController';
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
router.get('/loginn', (req, res) => {
    res.render('login');
});
router.post('/login', async (req, res) => {
    await login(req, res);
});

router.get('/', (req, res) => {
    res.render('inicio');
});
router.post('/nuevaDireccion', async (req, res) => {
    await verificarToken, nuevaDireccion(req, res);
});


router.get("/login", (req, res) => res.render("login"));
router.get("/inicio", (req, res) => res.render("inicio"));
router.get("/menu", (req, res) => res.render("productos"));
router.get("/perfil", (req, res) => res.render("perfil"));
router.get("/estado", (req, res) => res.render("estadorepartidor"));
router.get("/aceptado", (req, res) => res.render("aceptacion"));

export default router;
