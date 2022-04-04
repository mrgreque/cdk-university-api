import { PrismaSecretaryRepository } from './../repositories/implementations/PrismaSecretaryRepository';
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function secretaryEnsureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }
    
    const [, token] = authHeader.split(' ');

    try {
        verify(token, process.env.SECRET_KEY);
        
        return next();
    } catch (error) {
        return response.status(401).json({ error: 'Token invalid' });
    };
};