import { Request, Response } from "express";
import Direccion from "../db/models/direccion";

export const nuevaDireccion = async (req: Request, res: Response) => {
    const { col, calle, numero_ex, codigo } = req.body;
    try {
        const Ndireccion = await Direccion.create({
            col,
            calle,
            numero_ex,
            codigo,
            id_usuario: 1
        });

        res.redirect('/');
    } catch (error) {
        console.error("Error al guardar la dirección:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
