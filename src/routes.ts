import { response, Router } from 'express';
import { updateStudentController } from './useCases/updateStudent';
import { createStudentController } from './useCases/createStudent';
import { dropStudentController,  } from './useCases/dropStudent';
import { readStudentController } from './useCases/readStudent';

const router = Router();

router.post('/create/student', (request, response) => { return createStudentController.handle(request, response); });
router.post('/read/student', (request, response) => { return readStudentController.handle(request, response); });
router.get('/read/students', (request, response) => { return readStudentController.handle(request, response); });
router.post('/alter/student', (request, response) => { return updateStudentController.handle(request, response) });
router.delete('/drop/student', (request, response) => { return dropStudentController.handle(request, response) });

export { router };