import { Request, Response } from "express";
import { ReadSecreataryUseCase } from "./ReadSecretaryUseCase";

class ReadSecretaryController {

    constructor(private readSecretaryUseCase: ReadSecreataryUseCase){};

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {
            
            if (data && request.method == 'POST') {
                const secretary = await this.readSecretaryUseCase.execute(data);

                return response.status(201).json(secretary);
            } else {
                const secretaries = await this.readSecretaryUseCase.execute();

                return response.status(201).json(secretaries);
            };
        
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };
};

export { ReadSecretaryController };