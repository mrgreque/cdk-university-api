import { Request, Response } from "express";
import { DropCourseUseCase } from "./DropCourseUseCase";

class DropCourseController {

    constructor(private dropCourseUseCase: DropCourseUseCase) {};

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {
        
            await this.dropCourseUseCase.execute(data);

            return response.status(201).json({
                message: 'Course deleted'
            });

        } catch (error) {
        
            return response.status(400).send({
                message: error.message || 'Unexpected error.'
            });
        
        };
    };

};

export { DropCourseController };