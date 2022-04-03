import { PrismaSecretaryRepository } from './../../repositories/implementations/PrismaSecretaryRepository';
import { DropSecretaryController } from './DropSecretaryController';
import { DropSecretaryUseCase } from './DropSecretaryUseCase';

const secretaryRepository = new PrismaSecretaryRepository();
const dropSecretaryUseCase = new DropSecretaryUseCase(secretaryRepository);
const dropSecretaryController = new DropSecretaryController(dropSecretaryUseCase);

export {dropSecretaryUseCase, dropSecretaryController};