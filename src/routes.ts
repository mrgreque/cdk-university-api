import { Router } from 'express';
import { createStudentController } from './useCases/createStudent';

const router = Router();

router.post('/create/student', (request, response) => {
    return createStudentController.handle(request, response);
});

export { router };