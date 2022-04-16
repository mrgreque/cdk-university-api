import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { PrismaTeacherRepository } from "../repositories/implementations/PrismaTeacherRepository";

export async function teacherEnsureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: 'Token not provided' });
    }
    
    const [, token] = authHeader.split(' ');

    try {
        const {sub} = verify(token, process.env.SECRET_KEY);

        const teacherRepository = new PrismaTeacherRepository();
        const isTeacher = await teacherRepository.findById(sub as string);

        if (!isTeacher) {
            return response.status(401).json({ error: 'Access denied' });
        };
        
        return next();
    } catch (error) {
        return response.status(401).json({ error: 'Token invalid' });
    };
};