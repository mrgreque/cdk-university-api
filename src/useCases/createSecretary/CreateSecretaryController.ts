import { Request, Response } from "express";
import { CreateSecretaryUseCase } from "./CreateSecretaryUseCase";

class CreateSecretaryController {
    constructor(private createSecretaryUseCase: CreateSecretaryUseCase){};

    async handle(request: Request, response: Response){

        try {
            const data = request.body;

            await this.createSecretaryUseCase.execute(data);

            return response.status(201).send({
                message: 'Secretary created successfully'
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }

    };
};

export { CreateSecretaryController };