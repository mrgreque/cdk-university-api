import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { CreateCourseController } from './CreateCourseController';
import { CreateCourseUseCase } from './CreateCourseUseCase';

const courseRepository = new PrismaCourseRepository();
const createCourseUseCase = new CreateCourseUseCase(courseRepository);
const createCourseController = new CreateCourseController(createCourseUseCase);

export { createCourseUseCase, createCourseController };