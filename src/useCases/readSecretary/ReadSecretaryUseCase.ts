import { IReadSecretaryDTO } from './ReadSecretaryDTO';
import { ISecretaryRepository } from './../../repositories/ISecretaryRepository';
import { Secretary } from '../../entities/Secretary';

class ReadSecreataryUseCase {

    constructor(private secretaryRepository: ISecretaryRepository){};

    async execute(data?: IReadSecretaryDTO) {

        if (data) {

            if (!data.cpf && !data.id) {
                throw new Error('CPF or id is required.');
            };

            if (data.cpf && data.id) {
                throw new Error('Select only one option.');
            };

            let secretary: Secretary;

            if (data.cpf) {
                secretary = await this.secretaryRepository.findByCpf(data.cpf);
            } else if (data.id) {
                secretary = await this.secretaryRepository.findById(data.id);
            };

            if(!secretary) {
                throw new Error('Secretary not found');
            };

            return secretary;

        } else {
                
            const secretaries = await this.secretaryRepository.findAll();

            return secretaries;
    
        };
    };

};

export { ReadSecreataryUseCase };