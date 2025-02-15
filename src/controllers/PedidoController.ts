import { Request, Response } from 'express';
import Pedido from '../db/models/pedidos';
import DetallePedido from '../db/models/detalle_pedido';

export const craerpedidos = async (req: Request, res: Response) => {
    const { id_cliente, 
            id_repartidor,
            metodo_pago, 
            total,
            fecha_pedido, 
            fecha_entrega, 
            status, 
            id_producto, 
            cantidad, 
            precio_unitario, 
            subtotal } = req.body;

    const CrearPedido = await Pedido.create({
        id_cliente: 2,
        id_repartidor: 1,
        total: total,
        fecha_pedido: new Date().toISOString(),
        fecha_entrega: "2023-05-01",
        metodo_pago: metodo_pago,
    });
 

    res.status(200).json(CrearPedido);
};
