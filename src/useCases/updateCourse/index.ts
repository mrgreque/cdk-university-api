import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { UpdateCourseController } from './UpdateCourseController';
import { UpdateCourseUseCase } from './UpdateCourseUseCase';

const courseRepository = new PrismaCourseRepository();
const updateCourseUseCase = new UpdateCourseUseCase(courseRepository);
const updateCourseController = new UpdateCourseController(updateCourseUseCase);

export { updateCourseUseCase, updateCourseController };