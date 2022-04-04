import { Request, Response } from "express";
import { AuthenticateStudentUseCase } from "./AuthenticateStudentUseCase";

class AuthenticateStudentController {

    constructor(private authenticaterStudentUseCase: AuthenticateStudentUseCase) {};

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {

            const { student, token } = await this.authenticaterStudentUseCase.execute(data);

            return response.status(201).json({student, token});

        } catch (error) {

            return response.status(400).json({ error: error.message || 'Unexpected error.' });

        };
        
    };

};

export { AuthenticateStudentController };