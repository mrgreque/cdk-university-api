import { response, Router } from 'express';
import { updateStudentController } from './useCases/updateStudent';
import { createStudentController } from './useCases/createStudent';
import { dropStudentController,  } from './useCases/dropStudent';
import { readStudentController } from './useCases/readStudent';
import { dropSecretaryController } from './useCases/dropSecretary';
import { updateSecretaryController } from './useCases/updateSecretary';
import { readSecretaryController } from './useCases/readSecretary';
import { createSecretaryController } from './useCases/createSecretary';

const router = Router();

// Student routes
router.post('/create/student', (request, response) => { return createStudentController.handle(request, response); });
router.post('/read/student', (request, response) => { return readStudentController.handle(request, response); });
router.get('/read/student', (request, response) => { return readStudentController.handle(request, response); });
router.put('/update/student', (request, response) => { return updateStudentController.handle(request, response) });
router.delete('/drop/student', (request, response) => { return dropStudentController.handle(request, response) });

// Secretary routes
router.post('/create/secretary', (request, response) => { return createSecretaryController.handle(request, response); });
router.post('/read/secretary', (request, response) => { return readSecretaryController.handle(request, response); });
router.get('/read/secretary', (request, response) => { return readSecretaryController.handle(request, response); });
router.put('/update/secretary', (request, response) => { return updateSecretaryController.handle(request, response) });
router.delete('/drop/secretary', (request, response) => { return dropSecretaryController.handle(request, response) });

export { router };