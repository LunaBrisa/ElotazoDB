import express from 'express';
import { registrarCliente, registrarRepartidor } from '../controllers/registerControllers';
import {login, verificarToken} from '../controllers/authController';    
import Productos from '../db/models/productos';
import Direccion from '../db/models/direccion';
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
router.get('/menu', async(req, res) => {
    const productos = await Productos.findAll({ where: { status: "activo" } });
    const direccion = await Direccion.findAll({ where: { id_usuario: 1 } });
    res.render('productos', { productos, direccion });
});


router.get("/login", (req, res) => res.render("login"));
router.get("/inicio", (req, res) => res.render("inicio"));
router.get("/perfil", (req, res) => res.render("perfil"));
router.get("/estado", (req, res) => res.render("estadorepartidor"));

export default router;
