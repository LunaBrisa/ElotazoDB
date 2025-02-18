import express from 'express';
import { registrarCliente, registrarRepartidor } from '../controllers/registerControllers';
import { login, verificarToken } from '../controllers/authController';
import Productos from '../db/models/productos';
import Direccion from '../db/models/direccion';
import { craerpedidos, obtenerPedidos } from '../controllers/PedidoController';

const router = express.Router();



// Rutas de autenticación
router.get('/loginn', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    await login(req, res);
});

// Rutas de registro
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

// Ruta para la página de inicio
router.get('/', (req, res) => {
    res.render('inicio');
});

// Ruta para el menú de productos
router.get('/menu', async (req, res) => {
    const productos = await Productos.findAll({ where: { status: "activo" } });
    const direccion = await Direccion.findAll({ where: { id_usuario: 1 } });
    await verificarToken;
    res.render('productos', { productos, direccion });
});

// Ruta para el perfil del usuario
router.get('/perfil', async (req, res) => {
    const direccion = await Direccion.findAll({ where: { id_usuario: 1 } });
    res.render('perfil', { direccion });
});

// Ruta para el estado del repartidor
router.get('/estado', (req, res) => {
    res.render('estadorepartidor');
});

// Ruta para la aceptación de pedidos
router.get('/aceptado', (req, res) => {
    res.render('aceptacion');
});

// Ruta para crear un nuevo pedido
router.post('/crear-pedido', async (req, res) => {
    await craerpedidos(req, res);
});

// Ruta para obtener todos los pedidos
router.get('/obtener-pedidos', async (req, res) => {
    await obtenerPedidos(req, res);
});

export default router;