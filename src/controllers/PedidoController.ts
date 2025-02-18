import { Request, Response } from 'express';
import Pedido from '../db/models/pedidos'; // Asegúrate de que la ruta sea correcta
import DetallePedido from '../db/models/detalle_pedido'; // Asegúrate de que la ruta sea correcta

// Define una interfaz para el modelo Pedido
interface IPedido {
    id: number;
    id_cliente: number;
    id_repartidor: number;
    total: number;
    fecha_pedido: Date;
    fecha_entrega: Date;
    metodo_pago: string;
    status: string;
}

// Función para crear pedidos
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

// Función para obtener todos los pedidos
export const obtenerPedidos = async (req: Request, res: Response) => {
    try {
        // Obtener todos los pedidos con sus detalles
        const pedidos = await Pedido.findAll({
            include: [{
                model: DetallePedido,
                as: 'detalles', // Asegúrate de que esta relación esté definida en tu modelo Pedido
            }],
        });

        res.status(200).json(pedidos);
    } catch (error) {
        console.error('Error al obtener los pedidos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};