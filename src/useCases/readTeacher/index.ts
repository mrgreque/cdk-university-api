import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { ReadTeacherController } from './ReadTeacherController';
import { ReadTeacherUseCase } from './ReadTeacherUseCase';

const teacherRepository = new PrismaTeacherRepository();
const readTeacherUseCase = new ReadTeacherUseCase(teacherRepository);
const readTeacherController = new ReadTeacherController(readTeacherUseCase);

export { readTeacherUseCase, readTeacherController };