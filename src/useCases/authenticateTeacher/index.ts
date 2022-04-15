import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { AuthenticateTeacherController } from './AuthenticateTeacherController';
import { AuthenticateTeacherUseCase } from './AuthenticateTeacherUseCase';

const teacherRepository = new PrismaTeacherRepository();
const generateTokenProvider = new GenerateTokenProvider();
const authenticateTeacherUseCase = new AuthenticateTeacherUseCase(teacherRepository, generateTokenProvider);
const authenticateTeacherController = new AuthenticateTeacherController(authenticateTeacherUseCase);

export { authenticateTeacherUseCase , authenticateTeacherController };