import { IAuthenticateStudentDTO } from './AuthenticateStudentDTO';
import { IStudentRepository } from './../../repositories/IStudentRepository';
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
import { compare } from 'bcryptjs';

class AuthenticateStudentUseCase {

    constructor(private studentRepository: IStudentRepository, private generateTokenProvider: GenerateTokenProvider ) {};

    async execute(data: IAuthenticateStudentDTO) {
        const student = await this.studentRepository.findByCpf(data.cpf);

        if (!student) {
            throw new Error('CPF or password is invalid');
        }

        const passwordMatch = await compare(data.password, student.password);

        if (!passwordMatch) {
            throw new Error('CPF or password is invalid');
        };

        const token = await this.generateTokenProvider.execute(student.id);

        return {
            student,
            token
        };
    }

};

export { AuthenticateStudentUseCase };