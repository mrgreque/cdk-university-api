import { PrismaSecretaryRepository } from './../../repositories/implementations/PrismaSecretaryRepository';
import { CreateSecretaryController } from './CreateSecretaryController';
import { CreateSecretaryUseCase } from './CreateSecretaryUseCase';

const secretaryRepository = new PrismaSecretaryRepository();
const createSecretaryUseCase = new CreateSecretaryUseCase(secretaryRepository);
const createSecretaryController = new CreateSecretaryController(createSecretaryUseCase);

export { createSecretaryUseCase, createSecretaryController };