import { Router } from 'express';
import bcrypt from 'bcryptjs';
import Usuario from '../db/models/usuario';


const router = Router();

router.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar Sesión' });
});


router.get('/login', (req, res) => {
  res.sendFile(__dirname + "/views/login.ejs");
});
export default router;
