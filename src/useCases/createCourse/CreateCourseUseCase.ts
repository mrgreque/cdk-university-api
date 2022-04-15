import { ICreateCourseDTO } from './CreateCourseDTO';
import { ICourseRepository } from './../../repositories/ICourseRepository';
import { Course } from '../../entities/Course';
class CreateCourseUseCase {

    constructor ( private courseRepository: ICourseRepository ) {};

    async execute(data: ICreateCourseDTO) {

        const courseNameAlreadyExists = await this.courseRepository.findByName(data.name);

        if (courseNameAlreadyExists) {
            throw new Error('Course name already exists');
        };

        const course = new Course(data);

        await this.courseRepository.save(course);
    }

};

export { CreateCourseUseCase };