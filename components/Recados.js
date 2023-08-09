// controllers/recadosController.js

import { recados } from '../models/recadosModel'; // Importe o array 'recados' do seu modelo

const recadosController = {
  listarRecados(req, res) {
    res.json(recados);
  },

  criarRecado(req, res) {
    // Implemente a lógica para criar um novo recado
  },

  buscarRecado(req, res) {
    // Implemente a lógica para buscar um recado por ID
  },

  atualizarRecado(req, res) {
    // Implemente a lógica para atualizar um recado por ID
  },

  removerRecado(req, res) {
    // Implemente a lógica para remover um recado por ID
  },
};

export default recadosController;
