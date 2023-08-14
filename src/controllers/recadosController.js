// controllers/recadosController.js

import  recados from '../components/recados.js';
import users from '../components/users.js';
import usersController from './usersController.js';
 let proximoIdRecado = 1;

export const recadosController = {
  

  criarRecado(req, res) {
    // Implemente a lógica para criar um novo recado
    let inputInvalida =
      !req.body.descricao || !req.body.titulo || !req.body.idUser;

    // Verifica se a entrada é inválida ou se o idUser não foi fornecido
    if (inputInvalida) {
      return res.status(400).send("Dados inválidos");
    } else {
      // Verifica se o idUser existe na lista de usuários
      let userExiste = users.some(user => user.identificador === req.body.idUser);
      if (!userExiste) {
        return res.status(404).send("Usuário não encontrado");
      }

      // Cria um novo recado com os dados fornecidos
      const novoRecado = {
        idRecado: proximoIdRecado++, // Certifique-se de definir e controlar proximoIdRecado em algum lugar
        descricao: req.body.descricao,
        titulo: req.body.titulo,
        idUser: req.body.idUser,
      };

      // Adiciona o novo recado à lista de recados
      recados.push(novoRecado);

      // Retorna uma resposta com status 201 (Criado) para indicar o sucesso da criação
      res.status(201).json({
        mensagem: "Recado criado com sucesso",
        recado: novoRecado,
      });
    }
}
,

buscarRecado(req, res) {
  // Implemente a lógica para buscar um recado por ID
  const recadoId = parseInt(req.params.id); // Obtém o ID do parâmetro da rota
  
  // Verifica se o ID fornecido é válido e se existe um recado com esse ID
  const recadoEncontrado = recados.find(recado => recado.idRecado === recadoId);
  
  if (recadoEncontrado) {
      // Retorna o recado encontrado, status 200 (OK)
      res.status(200).json(recadoEncontrado);
  } else {
      // Retorna status 404 (Não encontrado) se o recado não foi encontrado
      res.status(404).send("Recado não encontrado");
  }
}
,

atualizarRecado(req, res) {
  // Implemente a lógica para atualizar um recado por ID

  // Verifica se os campos obrigatórios (titulo e descricao) estão presentes no corpo da requisição.
  const dadosInvalidos = !req.body.titulo || !req.body.descricao;

  // Implemente a lógica para buscar um recado por ID
  const recadoId = parseInt(req.params.id); // Obtém o ID do parâmetro da rota
  
  // Verifica se o ID fornecido é válido e se existe um recado com esse ID
  const recadoEncontrado = recados.find(recado => recado.idRecado === recadoId);
  
  if (recadoEncontrado) {
      // Atualiza o recado com os dados fornecidos
      recadoEncontrado.titulo = req.body.titulo;  
      recadoEncontrado.descricao = req.body.descricao;

      // Retorna o recado atualizado, status 200 (OK)
      res.status(200).json("mensagem: Recado atualizado com sucesso");
  } else {
      // Retorna status 404 (Não encontrado) se o recado não foi encontrado
      res.status(404).send("Recado não encontrado");
  }
}
  ,

  removerRecado(req, res) {
    // Implemente a lógica para remover um recado por ID
    const id = parseInt(req.params.id);
    const indice = recados.findIndex(recado => recado.idRecado === id);

    // Verifica se o recado foi encontrado na lista.
    if (indice === -1) {
      return res.status(404).send("Recado não encontrado");
    } else {
      // Remove o usuário da lista.
      users.splice(indice, 1);
      res.status(200).send("Recado deletado com sucesso");
    }
  },
};

export default recadosController;