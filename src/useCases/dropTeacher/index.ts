import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { DropTeacherController } from './DropTeacherController';
import { DropTeacherUseCase } from './DropTeacherUseCase';

const teacherRepository = new PrismaTeacherRepository();
const dropTeacherUseCase = new DropTeacherUseCase(teacherRepository);
const dropTeacherController = new DropTeacherController(dropTeacherUseCase);

export { dropTeacherUseCase , dropTeacherController };