import { PrismaStudentsRepository } from '../../repositories/implementations/PrismaStudentsRepository';
import { PrismaTeamRepository } from './../../repositories/implementations/PrismaTeamRespository';
import { CreateTeamController } from './CreateTeamController';
import { CreateTeamUseCase } from './CreateTeamUseCase';

const teamRepositoruy = new PrismaTeamRepository();
const studentRepository = new PrismaStudentsRepository();
const createTeamUseCase = new CreateTeamUseCase(teamRepositoruy, studentRepository);
const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamUseCase, createTeamController };