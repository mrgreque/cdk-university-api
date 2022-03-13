import { response, Router } from 'express';
import { alterStudentController } from './useCases/alterStudent';
import { createStudentController } from './useCases/createStudent';

const router = Router();

router.post('/create/student', (request, response) => { return createStudentController.handle(request, response); });
router.post('/alter/student', (request, response) => { return alterStudentController.handle(request, response) });

export { router };