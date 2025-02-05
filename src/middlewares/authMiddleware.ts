import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send("Acceso denegado. Token no proporcionado.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.body.usuario = decoded; 
        next();
    } catch (error) {
        res.status(401).send("Token inválido o expirado.");
    }
};
