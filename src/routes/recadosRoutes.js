// routes/recadosRoutes.js

import express from 'express';
import { recadosController } from '../controllers/recadosController.js';

const router = express.Router();



// Rota para criar um novo recado
router.post('/create', recadosController.criarRecado);

// Rota para buscar um recado por ID
router.get('/search/:id', recadosController.buscarRecado);

// Rota para atualizar um recado por ID
router.put('/:id', recadosController.atualizarRecado);

// Rota para remover um recado por ID
router.delete('/:id', recadosController.removerRecado);

export default router;
