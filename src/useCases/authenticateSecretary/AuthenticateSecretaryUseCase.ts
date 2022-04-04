import { compare } from 'bcryptjs';
import { IAuthenticateSecretaryDTO } from './AuthenticateSecretaryDTO';
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
import { ISecretaryRepository } from './../../repositories/ISecretaryRepository';
class AuthenticateSecretaryUseCase {

    constructor(private secretaryRepository: ISecretaryRepository, private generateTokenProvider: GenerateTokenProvider) {};

    async execute(data: IAuthenticateSecretaryDTO) {
        const secretary = await this.secretaryRepository.findByEmail(data.email);

        if (!secretary) {
            throw new Error('Email or password is invalid');
        };

        const passwordMatch = await compare(data.password, secretary.password);

        if (!passwordMatch) {
            throw new Error('Email or password is invalid');
        };

        const token = await this.generateTokenProvider.execute(secretary.id);

        return {
            secretary,
            token
        };

        
    };

};

export { AuthenticateSecretaryUseCase };