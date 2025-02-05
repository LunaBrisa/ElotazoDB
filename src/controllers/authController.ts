import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../db/models/usuario';
import Persona from "../db/models/persona";

const JWT_SECRET = process.env.JWT_SECRET || 'RjMW2Dc7kOl0hpgWdYmBcY4pXTd1h37T';

export const login = async (req: Request, res: Response) => {
  try {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
      return res.status(400).json({ message: 'Correo y contraseña son requeridos.' });
    }
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }

    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!esValida) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }
    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      usuario: {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        correo: usuario.correo,
      },
    });
  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ message: 'Error en el servidor. Inténtalo más tarde.' });
  }
};

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado, token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    (req as any).user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No hay token.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    await Usuario.destroy({
      where: { id: decoded.id },
    });

    res.clearCookie('token');
    return res.status(200).json({ message: 'Has cerrado sesión.' });
  } catch (error) {
    console.error('Error en el logout:', error);
    return res.status(500).json({ message: 'Error en el servidor. Inténtalo más tarde.' });
  }
};