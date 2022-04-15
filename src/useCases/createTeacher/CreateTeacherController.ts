import { Request, Response } from "express";
import { CreateTeacherUseCase } from "./CreateTeacherUseCase";

class CreateTeacherController {

    constructor(private createTeacherUseCase: CreateTeacherUseCase) { };

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {

            await this.createTeacherUseCase.execute(data);

            return response.status(201).json({message: 'Teacher created with success'});
        } catch(err) {

            return response.status(400).json({message: err.message || 'Unexpected error'});
        };

    };

};

export { CreateTeacherController };