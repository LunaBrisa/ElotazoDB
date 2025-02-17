import { Request, Response } from 'express';
import Pedido from '../db/models/pedidos';
import DetallePedido from '../db/models/detalle_pedido';

export const craerpedidos = async (req: Request, res: Response) => {
    try {
        console.log("Datos recibidos:", req.body); // Ver qué datos está recibiendo
        const { id_cliente, id_repartidor, metodo_pago, total, fecha_pedido, fecha_entrega } = req.body;

        if (!id_cliente || !id_repartidor || !metodo_pago || !total) {
            console.log("Error: Campos vacíos");
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const nuevoPedido = await Pedido.create({
            id_cliente,
            id_repartidor,
            total,
            fecha_pedido: fecha_pedido || new Date().toISOString(),
            fecha_entrega: fecha_entrega || null,
            metodo_pago,
            status: 'pendiente'
        });

        console.log("Pedido creado:", nuevoPedido);
        res.status(201).json(nuevoPedido);
    } catch (error) {
        console.error("Error al crear el pedido:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }




    res.status(200).json(craerpedidos);
};
