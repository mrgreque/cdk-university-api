import { Request, Response } from "express";
import { ReadTeacherUseCase } from "./ReadTeacherUseCase";

class ReadTeacherController {
    
    constructor( private readTeacherUseCase : ReadTeacherUseCase ) {};

    async handle (request: Request, response: Response) {
        
        const data = request.body;

        try {

            if ( data && request.method == 'POST') {
                const teacher = await this.readTeacherUseCase.execute(data);
    
                response.status(201).json(teacher)
            } else {
                const teachers = await this.readTeacherUseCase.execute();
    
                response.status(201).json(teachers);
            };
            
        } catch (error) {

            return response.status(400).json({
                message: error.message || error.sqlMessage
            });

        };

    };

};

export { ReadTeacherController };