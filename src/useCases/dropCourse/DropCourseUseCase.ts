import { IDropCourseDTO } from './DropCourseDTO';
import { ICourseRepository } from '../../repositories/ICourseRepository';

class DropCourseUseCase {

    constructor(private courseRepository: ICourseRepository){};

    async execute(data: IDropCourseDTO) {

        const courseExists = await this.courseRepository.findById(data.id);

        if(!courseExists) {
            throw new Error('Course not found');
        };

        if (courseExists.students.length > 0) {
            throw new Error('Course has students');
        };

        if (courseExists.teachers.length > 0) {
            throw new Error('Course has teachers');
        };

        await this.courseRepository.delete(data.id);

    };

};

export { DropCourseUseCase };