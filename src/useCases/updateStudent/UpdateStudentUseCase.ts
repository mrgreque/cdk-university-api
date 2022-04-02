import { hash } from 'bcryptjs';
import { IStudentRepository } from '../../repositories/IStudentRepository';
import { IUpdateStudentDTO } from "./UpdateStudentDTO";


class UpdateStudentUseCase {

    constructor(private studentRepository: IStudentRepository){};

    async execute(data: IUpdateStudentDTO) {
        
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

export { UpdateStudentUseCase };