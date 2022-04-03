import { Request, Response } from "express";
import { DropSecretaryUseCase } from "./DropSecretaryUseCase";

class DropSecretaryController {

    constructor(private dropSecretaryUseCase: DropSecretaryUseCase){};

    async handle(request: Request, response: Response){
            
        try {
            const data = request.body;

            await this.dropSecretaryUseCase.execute(data);

            return response.status(201).send({
                message: 'Secretary dropped successfully'
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };
};

export { DropSecretaryController };