import { IDropStudentDTO } from './DropStudentDTO';
import { IStudentRepository } from './../../repositories/IStudentRepository';
class DropStudentUseCase {
    constructor(private studentRepository: IStudentRepository) {};

    async execute(data: IDropStudentDTO) {
        const findUser = await this.studentRepository.findByCpf(data.cpf);

        if (!findUser) {
            throw new Error('Student not found');
        };

        await this.studentRepository.drop(findUser);
    }

};

export { DropStudentUseCase };