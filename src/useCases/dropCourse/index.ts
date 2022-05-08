import { PrismaCourseRepository } from '../../repositories/implementations/PrismaCourseRepository';
import { DropCourseController } from './DropCourseController';
import { DropCourseUseCase } from './DropCourseUseCase';

const courseRepository = new PrismaCourseRepository();
const dropCourseUseCase = new DropCourseUseCase(courseRepository);
const dropCourseController = new DropCourseController(dropCourseUseCase);

export { dropCourseUseCase, dropCourseController };