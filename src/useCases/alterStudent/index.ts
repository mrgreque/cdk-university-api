import { PrismaStudentsRepository } from './../../repositories/implementations/PrismaStudentsRepository';
import { AlterStudentController } from './AlterStudentController';
import { AlterStudentUseCase } from './AlterStudentUseCase';


const prismaStudentsRepostory = new PrismaStudentsRepository();

const alterStudentUseCase = new AlterStudentUseCase(
    prismaStudentsRepostory
);

const alterStudentController = new AlterStudentController(
    alterStudentUseCase
);

export { alterStudentUseCase, alterStudentController };