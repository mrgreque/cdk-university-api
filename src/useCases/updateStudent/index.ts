import { PrismaStudentsRepository } from '../../repositories/implementations/PrismaStudentsRepository';
import { UpdateStudentController } from './UpdateStudentController';
import { UpdateStudentUseCase } from './UpdateStudentUseCase';


const prismaStudentsRepostory = new PrismaStudentsRepository();

const alterStudentUseCase = new UpdateStudentUseCase(
    prismaStudentsRepostory
);

const updateStudentController = new UpdateStudentController(
    alterStudentUseCase
);

export { alterStudentUseCase, updateStudentController };