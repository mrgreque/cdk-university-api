import { PrismaSecretaryRepository } from './../../repositories/implementations/PrismaSecretaryRepository';
import { ReadSecretaryController } from './ReadSecretaryController';
import { ReadSecreataryUseCase } from './ReadSecretaryUseCase';

const secretaryRepository = new PrismaSecretaryRepository();
const readSecretaryUseCase = new ReadSecreataryUseCase(secretaryRepository);
const readSecretaryController = new ReadSecretaryController(readSecretaryUseCase);

export { readSecretaryUseCase, readSecretaryController };