import { Request, Response } from "express";
import { DropStudentUseCase } from "./DropStudentUseCase";

class DropStudentController {
    constructor(private dropStudentUseCase: DropStudentUseCase) {};

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            await this.dropStudentUseCase.execute(data);

            return response.status(200).send({
                message: "Student dropped successfully"
            });
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    };
};

export { DropStudentController };