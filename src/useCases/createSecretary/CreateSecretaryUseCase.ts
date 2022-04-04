import { ICreateSecretaryDTO } from './CreateSecretaryDTO';
import { ISecretaryRepository } from './../../repositories/ISecretaryRepository';
import { hash } from 'bcryptjs';
import { Secretary } from '../../entities/Secretary';

class CreateSecretaryUseCase {
  constructor(private secretaryRepository: ISecretaryRepository) {}

  async execute(data: ICreateSecretaryDTO) {

    const alreadyExists = await this.secretaryRepository.findByCpf(data.cpf);

    if(alreadyExists) {
      throw new Error('Secretary already exists');
    };

    const emailAlreadyExists = await this.secretaryRepository.findByEmail(data.email);

    if(emailAlreadyExists) {
      throw new Error('Email already exists');
    };

    const secretary = new Secretary(data);

    const passwordHash = await hash(secretary.password, 8);
    secretary.password = passwordHash;

    await this.secretaryRepository.save(secretary);
  }
}

export { CreateSecretaryUseCase };