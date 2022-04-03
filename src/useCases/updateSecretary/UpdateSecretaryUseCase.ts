import { hash } from 'bcryptjs';
import { IUpdateSecretaryDTO } from './UpdateSecretaryDTO';
import { ISecretaryRepository } from './../../repositories/ISecretaryRepository';
class UpdateSecretaryUseCase {

    constructor(private secretaryRepository: ISecretaryRepository){};

    async execute(data: IUpdateSecretaryDTO) {
            
        const secretary = await this.secretaryRepository.findById(data.id);

        if(!secretary) {
            throw new Error('Secretary not found');
        };

        Object.assign(secretary, data);

        if(data.password) {
            const newPasswordHash = await hash(data.password, 8);

            secretary.password = newPasswordHash;
        };

        await this.secretaryRepository.alter(secretary);
    };

};

export { UpdateSecretaryUseCase };