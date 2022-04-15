import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { CreateTeacherController } from './CreateTeacherController';
import { CreateTeacherUseCase } from './CreateTeacherUseCase';

const teacherRepository = new PrismaTeacherRepository();
const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository);
const createTeacherController = new CreateTeacherController(createTeacherUseCase);

export { createTeacherUseCase, createTeacherController };