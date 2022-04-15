import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { PrismaStudentsRepository } from './../../repositories/implementations/PrismaStudentsRepository';
import { CreateStudentController } from './CreateStudentController';
import { CreateStudentUserCase } from './CreateStudentUseCase';

const prismaStudentsRepository = new PrismaStudentsRepository();
const prismaCourseRepository = new PrismaCourseRepository();

const createStudentUseCase = new CreateStudentUserCase(
    prismaStudentsRepository,
    prismaCourseRepository
);

const createStudentController = new CreateStudentController(
    createStudentUseCase
);

export { createStudentUseCase, createStudentController };