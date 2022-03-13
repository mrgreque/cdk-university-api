import { Request, Response } from "express";
import { AlterStudentUseCase } from "./AlterStudentUseCase";


class AlterStudentController {

    constructor(private alterStudentUseCase: AlterStudentUseCase){};

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {
            await this.alterStudentUseCase.execute(data);

            return response.status(201).json({message: 'Student updated'})
            
        } catch (error) {
            
            return response.status(201).json({message: error.message})

        };
        
    };

};

export { AlterStudentController };