// controllers/usersController.js

import { users } from '../models/usersModel'; // Importe o array 'users' do seu modelo

const usersController = {
  cadastrarUsuario(req, res) {
    // Implemente a lógica para cadastro de usuário
  },

  loginUsuario(req, res) {
    // Implemente a lógica para login de usuário
  },

  listarUsuarios(req, res) {
    res.json(users);
  },
};

export default usersController;
