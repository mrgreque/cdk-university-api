import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { UpdateTeacherController } from './UpdateTeacherController';
import { UpdateTeacherUseCase } from './UpdateTeacherUseCase';


const prismaTeacherRepository = new PrismaTeacherRepository();
const updateTeacherUseCase = new UpdateTeacherUseCase(prismaTeacherRepository);
const updateTeacherController = new UpdateTeacherController(updateTeacherUseCase);

export { updateTeacherUseCase, updateTeacherController };