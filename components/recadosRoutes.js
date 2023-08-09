// routes/recadosRoutes.js

import express from 'express';
import recadosController from '../controllers/recadosController';

const router = express.Router();

router.get('/listagem', recadosController.listarRecados);
router.post('/', recadosController.criarRecado);
router.get('/:id', recadosController.buscarRecado);
router.put('/:id', recadosController.atualizarRecado);
router.delete('/:id', recadosController.removerRecado);

export default router;
