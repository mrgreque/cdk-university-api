import { PrismaSecretaryRepository } from './../../repositories/implementations/PrismaSecretaryRepository';
import { UpdateSecretaryController } from './UpdateSecretaryController';
import { UpdateSecretaryUseCase } from './UpdateSecretaryUseCase';

const secretaryRepository = new PrismaSecretaryRepository();
const updateSecretaryUseCase = new UpdateSecretaryUseCase(secretaryRepository);
const updateSecretaryController = new UpdateSecretaryController(updateSecretaryUseCase);

export { updateSecretaryUseCase , updateSecretaryController };