import { IReadCourseDTO } from './ReadCourseDTO';
import { ICourseRepository } from "../../repositories/ICourseRepository";
import { Course } from '@prisma/client';

class ReadCourseUseCase {
    
    constructor(private readCourseRepository: ICourseRepository) { };

    async execute(data?: IReadCourseDTO) {

        if (data) {

            if (!data.id) {
                throw new Error('You need to inform the course id');
            };

            let course = this.readCourseRepository.findById(data.id);

            if (!course) {
                throw new Error('Course not found');
            };

            return course;

        } else {

            return this.readCourseRepository.findAll();

        };

    };

};

export { ReadCourseUseCase };