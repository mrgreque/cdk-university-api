import { IDropTeacherDTO } from './DropTeacherDTO';
import { ITeacherRepository } from "../../repositories/ITeacherRepository";

class DropTeacherUseCase {

    constructor(private teacherRepository: ITeacherRepository) { };

    async execute(data: IDropTeacherDTO) {
        const findUser = await this.teacherRepository.findById(data.id);

        if (!findUser) {
            throw new Error('Teacher not found');
        };

        await this.teacherRepository.drop(findUser);
    };

};

export{ DropTeacherUseCase };