import { hash } from 'bcryptjs';
import { IStudentRepository } from './../../repositories/IStudentRepository';
import { IAlterStudentDTO } from "./AlterStudentDTO";


class AlterStudentUseCase {

    constructor(private studentRepository: IStudentRepository){};

    async execute(data: IAlterStudentDTO) {
        
        const student = await this.studentRepository.findByCpf(data.cpf);

        if(!student) {
            throw new Error('Student not found!');
        };

        Object.assign(student, data);

        if(data.password) {
            const newPasswordHash = await hash(data.password, 8);

            student.password = newPasswordHash;
        };

        await this.studentRepository.alter(student);

    }
}

export { AlterStudentUseCase }