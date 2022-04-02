import { Request, Response } from "express";
import { CreateStudentUserCase } from "./CreateStudentUseCase";



class CreateStudentController {

    constructor(private createStudentUserCase: CreateStudentUserCase){};

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {

            await this.createStudentUserCase.execute(data);

            return response.status(201).json({message: "Created Student"})
        } catch (error) {
            return response.status(400).json({message: error.message})
        };

    };

};

export { CreateStudentController }