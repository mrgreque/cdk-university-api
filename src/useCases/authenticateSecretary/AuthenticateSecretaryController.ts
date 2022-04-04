import { Request, Response } from "express";
import { AuthenticateSecretaryUseCase } from "./AuthenticateSecretaryUseCase";

class AuthenticateSecretaryController {

    constructor( private autheticateSecretaryUseCase: AuthenticateSecretaryUseCase ) {};

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            const { secretary, token } = await this.autheticateSecretaryUseCase.execute(data);

            return response.status(200).json({ secretary, token });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

};

export { AuthenticateSecretaryController };