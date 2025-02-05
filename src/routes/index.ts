import { Router } from 'express';
import bcrypt from 'bcryptjs';
import Usuario from '../db/models/usuario';


const router = Router();




router.get("/login", (req, res) => res.render("login"));
router.get("/inicio", (req, res) => res.render("inicio"));
router.get("/menu", (req, res) => res.render("productos"));
router.get("/perfil", (req, res) => res.render("perfil"));

export default router;
