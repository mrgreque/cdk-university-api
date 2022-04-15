import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { CreateTeacherController } from './CreateTeacherController';
import { CreateTeacherUseCase } from './CreateTeacherUseCase';

const teacherRepository = new PrismaTeacherRepository();
const prismaCourseRepository = new PrismaCourseRepository();

const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository, prismaCourseRepository);
const createTeacherController = new CreateTeacherController(createTeacherUseCase);

export { createTeacherUseCase, createTeacherController };