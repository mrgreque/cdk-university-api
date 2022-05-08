import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { ReadCourseController } from './ReadCourseController';
import { ReadCourseUseCase } from './ReadCourseUseCase';

const courseRepository = new PrismaCourseRepository();
const readCourseUseCase = new ReadCourseUseCase(courseRepository);
const readCourseController = new ReadCourseController(readCourseUseCase);

export { readCourseUseCase, readCourseController };