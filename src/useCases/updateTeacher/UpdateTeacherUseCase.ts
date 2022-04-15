import { IUpdateTeacherDTO } from './UpdateTeacherDTO';
import { hash } from 'bcryptjs';
import { Teacher } from '../../entities/Teacher';
import { ITeacherRepository } from '../../repositories/ITeacherRepository';
class UpdateTeacherUseCase {

    constructor(private teacherRepository: ITeacherRepository) { };

    async execute(data: IUpdateTeacherDTO): Promise<void> {

        const teacherExists = await this.teacherRepository.findById(data.id);

        if (!teacherExists) {
            throw new Error('Teacher not found');
        };

        Object.assign(teacherExists, data);

        if(data.password) {
            const newPasswordHash = await hash(data.password, 8);

            teacherExists.password = newPasswordHash;
        };

        await this.teacherRepository.alter(teacherExists);

    };

};

export { UpdateTeacherUseCase };