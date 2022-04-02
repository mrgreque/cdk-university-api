import { Request, Response } from "express";
import { UpdateStudentUseCase } from "./UpdateStudentUseCase";


class UpdateStudentController {

    constructor(private updateStudentUseCase: UpdateStudentUseCase){};

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {
            await this.updateStudentUseCase.execute(data);

            return response.status(201).json({message: 'Student updated'})
            
        } catch (error) {
            
            return response.status(400).json({message: error.message})

        };
        
    };

};

export { UpdateStudentController };