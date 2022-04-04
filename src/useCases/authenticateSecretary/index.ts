import { PrismaSecretaryRepository } from './../../repositories/implementations/PrismaSecretaryRepository';
import { GenerateTokenProvider } from "../../providers/GenerateTokenProvider";
import { AuthenticateSecretaryController } from './AuthenticateSecretaryController';
import { AuthenticateSecretaryUseCase } from './AuthenticateSecretaryUseCase';

const generateTokenProvider = new GenerateTokenProvider();
const secretaryRepository = new PrismaSecretaryRepository();
const authenticateSecretaryUseCase = new AuthenticateSecretaryUseCase(secretaryRepository, generateTokenProvider);
const authenticateSecretaryController = new AuthenticateSecretaryController(authenticateSecretaryUseCase);

export { authenticateSecretaryUseCase, authenticateSecretaryController };