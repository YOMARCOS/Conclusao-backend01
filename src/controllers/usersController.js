// Importa o módulo 'users' de '../components/users.js', que provavelmente contém uma array simulando um banco de dados de usuários.
import users from '../components/users.js';
import recados from '../components/recados.js';
let userLogado = false;

// Define o objeto 'usersController', que contém funções para manipular as funcionalidades relacionadas aos usuários.
export const usersController = {
  
  /**
   * cadastrarUsuario - Lógica para cadastrar um novo usuário.
   * @param {object} req - Objeto de requisição contendo os dados do usuário a ser cadastrado.
   * @param {object} res - Objeto de resposta para enviar a resposta da requisição.
   */
  cadastrarUsuario(req, res) {
    const { nome, senha, email } = req.body;

    // Verifica se os campos obrigatórios foram fornecidos.
    if (!nome || !senha || !email) {
      return res.status(422).send("Dados inválidos");
    }

    // Verifica se o email já existe na lista de usuários.
    const existeUser = users.some(user => user.email === email);
    if (existeUser) {
      return res.status(400).send("Email já cadastrado");
    }

    // Cria um novo usuário com os dados fornecidos.
    const novoUser = {
      id: idUser++, // Nota: `idUser` deve ser definido e controlado em algum lugar.
      nome,
      senha,
      email,
    };

    // Adiciona o novo usuário à lista de usuários.
    users.push(novoUser);

    // Retorna uma resposta com status 201 (Criado) para indicar o sucesso da criação.
    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      user: novoUser,
    });
  },

  /**
   * loginUsuario - Lógica para efetuar o login do usuário.
   * @param {object} req - Objeto de requisição contendo as credenciais de login.
   * @param {object} res - Objeto de resposta para enviar a resposta da requisição.
   */
  loginUsuario(req, res) {
    // Verifica se as credenciais de login são válidas, procurando um usuário na lista com o mesmo email e senha.
    let userValid = users.find(user => user.email === req.body.email && user.senha === req.body.senha);
   var idUserLogado = userValid.identificador
    if (userValid) {
      userLogado= true
      const recadosDoUsuario = recados.filter(recado => recado.idUser === idUserLogado );
       // Obtém o número da página a partir dos parâmetros da consulta ou assume 1 como padrão
       const paginaAtual = parseInt(req.query.page) || 1;
  
       // Obtém o número de elementos por página a partir dos parâmetros da consulta ou assume 3 como padrão
       const recadosPorPagina = parseInt(req.query.per_page) || 3;
   
       // Calcula o índice de início dos recados com base na página atual e na quantidade por página
       const indiceInicio = (paginaAtual - 1) * recadosPorPagina;
       const totalPages = Math.ceil(recadosDoUsuario.length / recadosPorPagina);
   
       // Slice do array de recados do usuário para obter os recados da página atual
       const recadosDaPagina = recadosDoUsuario.slice(indiceInicio, indiceInicio + recadosPorPagina);
      
      res.status(200).json({ "mensagem": "Login efetuado com sucesso", idUserLogado,
      recadosDaPagina,
      paginaAtual,
      recadosPorPagina,
      totalPages,
      totalRecados: recadosDoUsuario.length });
    } else {
      return res.status(400).send("Dados inválidos");
    }
  },


  /**
   * listarUsuarios - Retorna a lista de usuários.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta para enviar a lista de usuários.
   */
  listarUsuarios(req, res) {
    // Retorna a lista de usuários em formato JSON.
    res.json(users);
  },

  /**
   * deleteUser - Lógica para deletar um usuário.
   * @param {object} req - Objeto de requisição contendo o ID do usuário a ser deletado.
   * @param {object} res - Objeto de resposta para enviar a resposta da requisição.
   */
  deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const indice = users.findIndex(user => user.identificador === id);

    // Verifica se o usuário foi encontrado na lista.
    if (indice === -1) {
      return res.status(404).send("Usuário não encontrado");
    } else {
      // Remove o usuário da lista.
      users.splice(indice, 1);
      res.status(200).send("Usuário deletado com sucesso");
    }
  }
};

// Exporta o objeto 'usersController' para que ele possa ser usado em outras partes do seu aplicativo.
export default usersController;