import { compare } from 'bcryptjs';
import { IAuthenticateTeacherDTO } from './AuthenticateTeacherDTO';
import { PrismaTeacherRepository } from './../../repositories/implementations/PrismaTeacherRepository';
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
class AuthenticateTeacherUseCase {

    constructor( private teacherRepository: PrismaTeacherRepository, private generateTokenProvider: GenerateTokenProvider) { };

    async execute(data: IAuthenticateTeacherDTO) {

        const teacher = await this.teacherRepository.findByEmail(data.email);

        if (!teacher) {
            throw new Error('Email or password invalid');
        };

        const passwordMatch = await compare(data.password, teacher.password);

        if(!passwordMatch) {
            throw new Error('Email or password invalid');
        };

        const token = await this.generateTokenProvider.execute(teacher.id);

        return {
            user: teacher,
            token
        };

    };

};

export { AuthenticateTeacherUseCase };