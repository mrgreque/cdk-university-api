import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

class CreateTeamController{

    constructor( private createTeamUseCase: CreateTeamUseCase) {};

    async handle(request: Request, response: Response) {
            
            try {
    
                const data = request.body;
    
                await this.createTeamUseCase.execute(data);
    
                return response.status(201).json({
                    message: "Team created with success"
                });
    
            } catch (error) {
                return response.status(400).json({
                    message: error.message || 'Unexpected error.'
                });
            };
    }

};

export { CreateTeamController };