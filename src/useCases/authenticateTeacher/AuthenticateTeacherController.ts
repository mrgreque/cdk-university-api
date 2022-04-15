import { Request, Response } from "express";
import { AuthenticateTeacherUseCase } from "./AuthenticateTeacherUseCase";

class AuthenticateTeacherController {

    constructor( private authenticateTeacherUseCase: AuthenticateTeacherUseCase) { };

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            const result = await this.authenticateTeacherUseCase.execute(data);

            return response.status(200).send(result);      
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };

};

export { AuthenticateTeacherController };