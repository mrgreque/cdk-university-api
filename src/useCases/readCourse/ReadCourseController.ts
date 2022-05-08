import { Request, Response } from "express";
import { ReadCourseUseCase } from "./ReadCourseUseCase";

class ReadCourseController {

    constructor(private readCourseUseCase: ReadCourseUseCase) {}

    async handle(request: Request, response: Response) {

        try {
            
            if(request.method == 'GET') {
                const courses = await this.readCourseUseCase.execute();

                return response.status(200).json(courses);
            } else {
                
                const data = request.body;

                const course = await this.readCourseUseCase.execute(data);

                return response.status(200).json(course);

            };

        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });

        };

    };

};

export { ReadCourseController };