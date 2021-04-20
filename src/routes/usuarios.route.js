import { Router } from 'express';
import usuariosController from '../controllers/usuarios.controller';
import { verifyToken, isAdmin } from '../middlewares/auntenticador';

const router = Router();

//obtener todos
router.get('/usuario', [verifyToken, isAdmin], usuariosController.getUsers);
//obtener uno por id
router.get('/usuario/:id', [verifyToken, isAdmin], usuariosController.getUser);

//agregar
router.post('/usuario', [verifyToken, isAdmin], usuariosController.addUser);

//editar
router.put('/usuario/:id', [verifyToken, isAdmin], usuariosController.editUser);
//eliminar
router.delete('/usuario/:id', [verifyToken, isAdmin], usuariosController.deleteUser);

export default router;