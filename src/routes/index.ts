import express from 'express';
import { registrarCliente, registrarRepartidor } from '../controllers/registerControllers';
import {login, logout} from '../controllers/authController';    
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

router.post('/logout', async (req, res) => {
    await logout(req, res);
});

router.get('/', (req, res) => {
    res.render('inicio');
});




router.get("/login", (req, res) => res.render("login"));
router.get("/inicio", (req, res) => res.render("inicio"));
router.get("/menu", (req, res) => res.render("productos"));
router.get("/perfil", (req, res) => res.render("perfil"));

export default router;
