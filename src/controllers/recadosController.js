// controllers/recadosController.js

import  recados from '../components/recados.js';
import users from '../components/users.js';
 let proximoIdRecado = 1;
export const recadosController = {
  listarRecados(req, res) {
    // Obtém o número da página a partir dos parâmetros da consulta ou assume 1 como padrão
    const paginaAtual = parseInt(req.query.page) || 1;
    
    // Obtém o número de elementos por página a partir dos parâmetros da consulta ou assume 3 como padrão
    const recadosPorPagina = parseInt(req.query.per_page) || 3;
  
    // Calcula o índice de início dos recados com base na página atual e na quantidade por página
    const indiceInicio = (paginaAtual - 1) * recadosPorPagina;
  
    // Slice do array de recados para obter os recados da página atual
    const recadosDaPagina = recados.slice(indiceInicio, indiceInicio + recadosPorPagina);
  
    // Retorna uma resposta JSON com os recados da página atual e informações de paginação
    res.json({
      recados: recadosDaPagina,
      paginaAtual,
      recadosPorPagina,
      totalRecados: recados.length
    });
  },

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