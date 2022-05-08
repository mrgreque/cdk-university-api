import { ICourseRepository } from './../../repositories/ICourseRepository';
import { UpdateCourseDTO } from "./UpdateCourseDTO";


class UpdateCourseUseCase {
    constructor(private courseRepository: ICourseRepository) {}

    async execute(data: UpdateCourseDTO) {

        const course = await this.courseRepository.findById(data.id);

        if(!course) {
            throw new Error('Course not found');
        };

        if (!data.name && !data.description) {
            throw new Error('You need to inform at least one field to update');
        };

        delete course.teachers;

        delete course.students;

        Object.assign(course, data);

        return this.courseRepository.update(course);
    };
};

export { UpdateCourseUseCase };