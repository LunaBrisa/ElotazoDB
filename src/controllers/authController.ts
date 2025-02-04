import e, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../db/models/usuario';

const JWT_SECRET = process.env.JWT_SECRET || 'RjMW2Dc7kOl0hpgWdYmBcY4pXTd1h37T';

export const register = async (req: Request, res: Response) => {
    try {
      const { nombre_usuario, contrasena, correo } = req.body;
  
      const usuarioExistente = await Usuario.findOne({ where: { correo } });
      if (usuarioExistente) {
        return res.status(400).json({ message: 'El usuario ya está registrado.' });
      }
  
      const hashedPassword = await bcrypt.hash(contrasena, 10);
      const nuevoUsuario = await Usuario.create({
        nombre_usuario,
        contrasena: hashedPassword,
        correo,
      });
  
      return res.status(201).json({
        message: 'Usuario registrado exitosamente.',
        usuario: {
          id: nuevoUsuario.id,
          nombre_usuario: nuevoUsuario.nombre_usuario,
          correo: nuevoUsuario.correo,
        },
      });
    } catch (error) {
      // 🔹 ¡Falta el return aquí!
      return res.status(500).json({ message: 'Error en el servidor.', error });
    }
  };
  
// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { correo, contrasena } = req.body;

    // Verificar si el usuario existe
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }

    // Comparar contraseñas
    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!esValida) {
      return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      usuario: {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        correo: usuario.correo,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.', error });
  }
};

