import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();

// Rota para cadastrar um novo usuário
router.post('/cadastrar', usersController.cadastrarUsuario);

// Rota para efetuar o login do usuário
router.post('/login', usersController.loginUsuario);
// Rota para listar todos os recados
router.get('/login', usersController.listarRecados);
// Rota para listar todos os usuários
router.get('/listar', usersController.listarUsuarios);

//rota deletar um usuario
router.delete('/delete/:id', usersController.deleteUser);

export default router;
