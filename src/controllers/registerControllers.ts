import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Usuario from '../db/models/usuario';
import Persona from '../db/models/persona';
import Cliente from '../db/models/clientes';
import Repartidor from '../db/models/repartidor';

export const registrarCliente = async (req: Request, res: Response) => {
    const {
        nombre_usuario,
        correo,
        contrasena,
        nombre,
        a_p,
        a_m,
        genero,
        fecha_nac,
    } = req.body;
    try {
        const usuarioExistente = await Usuario.findOne({ where: { correo } });

        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado.' });
        }

        const hash = await bcrypt.hash(contrasena, 10);

        const nuevoUsuario = await Usuario.create({
            nombre_usuario,
            correo,
            contrasena: hash,
        });

        const nuevapersona = await Persona.create({
            nombre,
            a_p,
            a_m,
            genero,
            fecha_nac,
            id_usuario: nuevoUsuario.id,
        });
        const nuevocliente = await Cliente.create({
            id_usuario: nuevoUsuario.id,
        });

        res.redirect('/');
    } catch (error) {
        console.error('Error al registrar el cliente:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
};

export const registrarRepartidor = async (req: Request, res: Response) => {
    const {
        nombre_usuario,
        correo,
        contrasena,
        nombre,
        a_p,
        a_m,
        genero,
        fecha_nac,
        rfc,
        nss,
    } = req.body;
    try {
        const usuarioExistente = await Usuario.findOne({ where: { correo } });

        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado.' });
        }

        const hash = await bcrypt.hash(contrasena, 10);

        const nuevoUsuario = await Usuario.create({
            nombre_usuario,
            correo,
            contrasena: hash,
        });

        const nuevapersona = await Persona.create({
            nombre,
            a_p,
            a_m,
            genero,
            fecha_nac,
            id_usuario: nuevoUsuario.id,
        });
        const nuevor = await Repartidor.create({
            id_usuario: nuevoUsuario.id,
            rfc,
            nss,
        });

        res.redirect('/');
    } catch (error) {
        console.error('Error al registrar el repartidor:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
};