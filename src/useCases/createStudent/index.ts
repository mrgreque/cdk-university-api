import { PrismaStudentsRepository } from './../../repositories/implementations/PrismaStudentsRepository';
import { CreateStudentController } from './CreateStudentController';
import { CreateStudentUserCase } from './CreateStudentUseCase';

const prismaStudentsRepository = new PrismaStudentsRepository();

const createStudentUseCase = new CreateStudentUserCase(
    prismaStudentsRepository
);

const createStudentController = new CreateStudentController(
    createStudentUseCase
);

export { createStudentUseCase, createStudentController };