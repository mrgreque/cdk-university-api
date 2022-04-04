import { Router } from 'express';
import { updateStudentController } from './useCases/updateStudent';
import { createStudentController } from './useCases/createStudent';
import { dropStudentController,  } from './useCases/dropStudent';
import { readStudentController } from './useCases/readStudent';
import { dropSecretaryController } from './useCases/dropSecretary';
import { updateSecretaryController } from './useCases/updateSecretary';
import { readSecretaryController } from './useCases/readSecretary';
import { createSecretaryController } from './useCases/createSecretary';
import { authenticateStudentController } from './useCases/authenticateStudent';
import { secretaryEnsureAuthenticate } from './middlewares/SecretaryEnsureAuthenticate';
import { adminSecretaryEnsureAuthenticate } from './middlewares/AdminSecretaryEnsureAuthenticate';
import { authenticateSecretaryController } from './useCases/authenticateSecretary';

const router = Router();

router.post('/login/student', (request, response) => { return authenticateStudentController.handle(request, response); });
router.post('/login/secretary', (request, response) => { return authenticateSecretaryController.handle(request, response); });

// Student routes
router.post('/create/student' , secretaryEnsureAuthenticate, (request, response) => { return createStudentController.handle(request, response); });
router.post('/read/student', secretaryEnsureAuthenticate, (request, response) => { return readStudentController.handle(request, response); });
router.get('/read/student', secretaryEnsureAuthenticate, (request, response) => { return readStudentController.handle(request, response); });
router.put('/update/student', secretaryEnsureAuthenticate, (request, response) => { return updateStudentController.handle(request, response) });
router.delete('/drop/student', secretaryEnsureAuthenticate, (request, response) => { return dropStudentController.handle(request, response) });

// Secretary routes
router.post('/create/secretary' , adminSecretaryEnsureAuthenticate, (request, response) => { return createSecretaryController.handle(request, response); });
router.post('/read/secretary', adminSecretaryEnsureAuthenticate , (request, response) => { return readSecretaryController.handle(request, response); });
router.get('/read/secretary', adminSecretaryEnsureAuthenticate , (request, response) => { return readSecretaryController.handle(request, response); });
router.put('/update/secretary', adminSecretaryEnsureAuthenticate , (request, response) => { return updateSecretaryController.handle(request, response) });
router.delete('/drop/secretary', adminSecretaryEnsureAuthenticate , (request, response) => { return dropSecretaryController.handle(request, response) });

export { router };