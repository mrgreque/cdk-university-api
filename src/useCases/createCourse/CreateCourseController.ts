import { Request, Response } from "express";
import { CreateCourseUseCase } from "./CreateCourseUseCase";

class CreateCourseController {

    constructor(private createCourseUseCase: CreateCourseUseCase) {}

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {

            await this.createCourseUseCase.execute(data);
            
            response.status(201).json({
                message: "Course created successfully"
            });

        } catch (error) {

            response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
            
        };
    }

};

export { CreateCourseController };