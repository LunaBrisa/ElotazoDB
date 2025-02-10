import { Request, Response } from "express";
import Productos from "../db/models/productos";

export const MostrarProductos = async (req: Request, res: Response) => {
    try {
        const productos = await Productos.findAll({ where: { status: "activo" } });
        res.render("productos", { productos }); 
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).send("Error interno del servidor");
    }
};
