import { PrismaStudentsRepository } from './../../repositories/implementations/PrismaStudentsRepository';
import { DropStudentController } from './DropStudentController';
import { DropStudentUseCase } from './DropStudentUseCase';

const studentRepository = new PrismaStudentsRepository();

const dropStudentUseCase = new DropStudentUseCase(studentRepository);
const dropStudentController = new DropStudentController(dropStudentUseCase);

export { dropStudentUseCase, dropStudentController };