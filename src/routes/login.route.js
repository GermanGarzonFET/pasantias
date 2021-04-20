import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { chekRoleExisted, chekUserExisted } from '../middlewares/login';

const router = Router();

router.post('/register', [chekUserExisted, chekRoleExisted], loginController.register);
router.post('/login', loginController.iniciar);

export default router;