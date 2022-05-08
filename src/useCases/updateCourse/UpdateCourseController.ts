import { Request, Response } from 'express';
import { UpdateCourseUseCase } from './UpdateCourseUseCase';


class UpdateCourseController {

    constructor(private updateCourseUseCase: UpdateCourseUseCase) {};

    async handle (request: Request, response: Response) {
    
        const data = request.body;

        try{

            await this.updateCourseUseCase.execute(data);

            return response.status(201).json({
                message: 'Course updated successfully'
            });
            
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        };
    };
};

export { UpdateCourseController };