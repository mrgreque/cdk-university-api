import { Request, Response } from "express";
import { UpdateSecretaryUseCase } from "./UpdateSecretaryUseCase";

class UpdateSecretaryController {

    constructor(private updateSecretaryUseCase: UpdateSecretaryUseCase){};

    async handle(request: Request, response: Response){

        try {
            const data = request.body;

            await this.updateSecretaryUseCase.execute(data);

            return response.status(200).send({
                message: 'Secretary updated successfully'
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };
};

export { UpdateSecretaryController };