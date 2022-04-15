import { IDropStudentDTO } from './DropStudentDTO';
import { IStudentRepository } from './../../repositories/IStudentRepository';
class DropStudentUseCase {
    constructor(private studentRepository: IStudentRepository) {};

    async execute(data: IDropStudentDTO) {
        const findUser = await this.studentRepository.findById(data.id);

        if (!findUser) {
            throw new Error('Student not found');
        };

        await this.studentRepository.drop(findUser);
    }

};

export { DropStudentUseCase };