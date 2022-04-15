import { Request, Response } from "express";
import { UpdateTeacherUseCase } from "./UpdateTeacherUseCase";

class UpdateTeacherController {

    constructor(private updateTeacherUseCase: UpdateTeacherUseCase) { };

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {

            await this.updateTeacherUseCase.execute(data);

            return response.status(201).json({
                message: 'Teacher updated successfully'
            });

        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        };

    };

};

export { UpdateTeacherController };