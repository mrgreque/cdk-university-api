import { Request, Response } from "express";
import { DropTeacherUseCase } from "./DropTeacherUseCase";

class DropTeacherController{

    constructor( private dropTeacherUseCase: DropTeacherUseCase ){ };

    async handle(request: Request, response: Response){
        const data = request.body;

        try{
            
            await this.dropTeacherUseCase.execute(data);

            return response.status(201).json({
                message: 'Teacher dropped successfully'
            });

        } catch(err) {

            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });

        };
    };
};

export { DropTeacherController };