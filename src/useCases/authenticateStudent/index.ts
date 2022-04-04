import { PrismaStudentsRepository } from './../../repositories/implementations/PrismaStudentsRepository';
import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";
import { AuthenticateStudentController } from './AuthenticateStudentController';
import { AuthenticateStudentUseCase } from './AuthenticateStudentUseCase';

const generateTokenProvider = new GenerateTokenProvider();
const studentRepository = new PrismaStudentsRepository();
const authenticateStudentUseCase = new AuthenticateStudentUseCase(studentRepository, generateTokenProvider);
const authenticateStudentController = new AuthenticateStudentController(authenticateStudentUseCase);

export { authenticateStudentUseCase, authenticateStudentController };