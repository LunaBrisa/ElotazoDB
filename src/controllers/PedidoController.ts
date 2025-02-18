import { Request, Response } from 'express';
import Pedido from '../db/models/pedidos';
import DetallePedido from '../db/models/detalle_pedido';

export const craerpedidos = async (req: Request, res: Response) => {
    try {
        const { id_cliente, id_repartidor, metodo_pago, total, fecha_pedido,id_producto, productos } = req.body;

        if (!productos || productos.length === 0) {
            return res.status(400).json({ message: "No hay productos en el pedido." });
        }

        // Crear el pedido en la tabla 'pedidos'
        const nuevoPedido = await Pedido.create({
            id_cliente,
            id_repartidor: id_repartidor || 1, 
            total,
            fecha_pedido: new Date().toISOString(),
            fecha_entrega: "2023-05-01", 
            metodo_pago
        });

        // Insertar cada producto en la tabla 'detalle_pedido'
        const detalles = await Promise.all(productos.map(async (producto: any) => {
            return await DetallePedido.create({
                id_pedido: nuevoPedido.get("id"),
                id_producto: producto.id_producto,
                cantidad: producto.cantidad,
                precio_unitario: producto.precio_unitario,
                subtotal: producto.subtotal
            });
        }));
        console.log("Datos recibidos:", req.body);

        return res.status(200).json({
            message: "Pedido creado con éxito",
            pedido: nuevoPedido,
            detalles
        });

    } catch (error) {
        console.error("Error al crear el pedido:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
