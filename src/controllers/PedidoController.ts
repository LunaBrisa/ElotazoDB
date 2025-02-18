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
    const { id_cliente, metodo_pago, total, productos } = req.body;

    // Validación básica
    if (!id_cliente || !metodo_pago || !total || !productos || !Array.isArray(productos)) {
        return res.status(400).json({ message: 'Datos incompletos o inválidos' });
    }

    try {
        // Crear el pedido
        const nuevoPedido = await Pedido.create({
            id_cliente: id_cliente,
            id_repartidor: 1, // Asignar un repartidor por defecto o dejarlo null
            total: total,
            fecha_pedido: new Date().toISOString(),
            fecha_entrega: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(), // Entrega en 3 días
            metodo_pago: metodo_pago,
            status: 'pendiente', // Estado inicial del pedido
        }) as unknown as IPedido; // Type casting para asegurar que TypeScript reconozca el tipo

        // Crear los detalles del pedido
        for (const producto of productos) {
            await DetallePedido.create({
                id_pedido: nuevoPedido.id, // Aquí TypeScript ya sabe que `nuevoPedido` tiene una propiedad `id`
                id_producto: producto.id_producto,
                cantidad: producto.cantidad,
                precio_unitario: producto.precio_unitario,
                subtotal: producto.subtotal,
            });
        }

        res.status(201).json({ message: 'Pedido creado con éxito', pedido: nuevoPedido });
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
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