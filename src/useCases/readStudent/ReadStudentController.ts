import { Request, Response } from "express";
import { ReadStudentUseCase } from "./ReadStudentUseCase";

class ReadStudentController {
    constructor(private readStudentUseCase: ReadStudentUseCase) {}
    
    async handle(request: Request, response: Response) {
        const data = request.body;

        try{
            
            if (data.cpf) {
                const student = await this.readStudentUseCase.execute(data);

                return response.status(200).json(student);
            } else {
                const students = await this.readStudentUseCase.execute();

                return response.status(200).json(students);
            }
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        };
    };
};

export { ReadStudentController };