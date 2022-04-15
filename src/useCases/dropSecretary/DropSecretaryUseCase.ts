import { IDropSecretaryDTO } from './DropSecretaryDTO';
import { ISecretaryRepository } from './../../repositories/ISecretaryRepository';

class DropSecretaryUseCase {

    constructor(private secretaryRepository: ISecretaryRepository){};

    async execute(data: IDropSecretaryDTO) {
        
        const secretary = await this.secretaryRepository.findById(data.id);

        if(!secretary) {
            throw new Error('Secretary not found');
        };

        await this.secretaryRepository.drop(secretary);
    };

};

export { DropSecretaryUseCase };