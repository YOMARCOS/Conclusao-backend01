// routes/usersRoutes.js

import express from 'express';
import usersController from '../controllers/usersController';

const router = express.Router();

router.post('/cadastro', usersController.cadastrarUsuario);
router.post('/login', usersController.loginUsuario);
router.get('/listagem', usersController.listarUsuarios);

export default router;
