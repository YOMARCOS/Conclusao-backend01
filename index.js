import cors from 'cors'
import express from "express"; //importando express
 
const app = express();   //ativando
app.use(express.json());  // definindo tipo de texto
app.use(cors()); // import cors

//lista de usuarios com as seguintes propriedades
//usario.nome
//usuario.senha
//usuario.email
//usuario.identificador
const users = [
  {
    nome: "Usuário 1",
    senha: "senha1",
    email: "usuario1@example.com",
   id: 1,
   recados: [ {
    titulo: "testando paginação",
    descricao: "teste de api",
    idRecado: 1,
    idUser: 1
  },
  {
    titulo: "Vitória emocionante no último minuto",
    descricao: "Nosso time de futebol ganhou com um gol nos acréscimos!",
    idRecado: 2,
    idUser: 1
  },
  {
    titulo: "Nova produção cinematográfica",
    descricao: "Um filme épico está sendo produzido e promete surpreender a todos.",
    idRecado: 3,
    idUser: 1
  }

   ]
  },
  {
    nome: "Usuário 2",
    senha: "senha2",
    email: "usuario2@example.com",
    id: 2,
    recados: [
      {
        titulo: "Vitória emocionante no último minuto",
        descricao: "Nosso time de futebol ganhou com um gol nos acréscimos!",
        idRecado: 2,
        idUser:2
      },
      {
        titulo: "Nova produção cinematográfica",
        descricao: "Um filme épico está sendo produzido e promete surpreender a todos.",
        idRecado: 3,
        idUser: 2
      }
     ]
  }

]; 
let contador = 1;
var logado=true;
var validate= false;

function numerarRecados() {  
  for (const user of users) {
    for (let i = 0; i < usuario.recados.length; i++) {
      usuario.recados[i].id = i;
    }
  }
}


app.get('/', function (req, res) {
  res.send('Hello! Este é meu CRUD de recados.');
});

// cadastro deve receber um json no body com as seguintes propriedades
// body.nome
// body.senha
// body.email: deve ser unico
app.post("/cadastro", function (req, res) {
  // VALIDACÕES
  const inputInvalida =
    !req.body.nome || !req.body.senha || !req.body.email;   //verifica se o valor correspondente é falso ou indefinido
  //  email já existente usando for of
  let existeUser = false;
  for (const user of users) {
    if (user.email === req.body.email) {
      existeUser = true;
    }
  }
  if (inputInvalida) {
    res.status(400);
    res.send("Dados inválidos");
  } else if (existeUser) {
    res.status(400);
    res.send("Email já cadastrado");
  } else {
    // CRIANDO USUARIO
    const novoUser =  {
      id: contador,
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
      recados: []
    };
   contador++;
    users.push(novoUser);
    res.json({
      mensagem: "Usuário criado com sucesso", 
      user: novoUser.email,
      id: novoUser.id,
      nome: novoUser.nome
    });
  }
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const senha = req.body.senha;

  const userValid = users.find(function (user) { //busca no array
    return user.email === email && user.senha === senha; //verifica se o email e senha são iguais
  });
  if (userValid) {
    logado = true;
    res.json({
      mensagem: "Usuário logado com sucesso",
      usuario: {
        id: userValid.identificador,
        nome: userValid.nome
      }, paginatedRecados
    });
  } else {
    logado = false;
    res.status(401);
    res.send("Email ou senha inválidos");
  }
});

numerarRecados();
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 4; // Padrão para 4 recados por página

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedRecados = usuarioLogado.recados.slice(startIndex, endIndex);

app.get("/users", function (req, res) {
  res.json(users)
})



//rota listagem de recados
app.get("/recados", function (req, res) {
  res.json(recados)
})

app.post("/recados", function (req, res) {
  // Verifica se há campos inválidos no corpo da requisição
  const inputInvalido = !req.body.titulo || !req.body.descricao || !req.body.idUser;
  if (inputInvalido) {
    return res.status(400).send("Entrada inválida, preencha os campos corretamente")
  }

  // Verifica se o usuário já existe
  const userExistente = users.some(user => user.identificador === req.body.idUser);
  if (!userExistente) {
    return res.status(400).send("Usuário não encontrado");
  }

  // Cria um novo recado
  const novoRecado = {
    id: idRecado++,
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    idUser: req.body.idUser
  };
  
  // Adiciona o recado à lista de recados
  recados.push(novoRecado);

  // Retorna a resposta de sucesso
  res.status(201).json({
    mensagem: "Recado criado com sucesso",
    recado: novoRecado
  });
});

//buscar recado
// Rota para recuperar informações sobre um recado específico com base no ID do usuário e no ID do recado.
app.get("/recados/:idUser/:idRecado", function (req, res) {
  // Obtém o ID do usuário e o ID do recado da URL e converte para valores numéricos.
  
  const idRecado = parseInt(req.params.idRecado);

  // Procura o recado na lista de recados usando o método `find`.
  const recadoEncontrado = recados.find(function (recado) {
    return recado.id === idRecado;
  });
  // Verifica se o recado foi encontrado na lista.
  if (recadoEncontrado) {
    // Se o recado foi encontrado, retorna uma resposta JSON com as informações do recado.
    res.json({
      mensagem: "Recado encontrado",
      recado: recadoEncontrado
    });
  } else {
    // Se o recado não foi encontrado, retorna um status 404 e uma mensagem de erro.
    res.status(404).send("Recado não encontrado");
  }
});

// atualizar recado
app.put("/recados/:idRecado", function (req, res) {
  // Verifica se os campos obrigatórios (titulo e descricao) estão presentes no corpo da requisição.
  const dadosInvalidos = !req.body.titulo || !req.body.descricao;

  // Obtém os IDs do usuário e do recado da URL e os converte para valores numéricos.

  const idRecado = parseInt(req.params.idRecado);

  // Procura o recado na lista de recados usando o método `find`.
  const recadoEncontrado = recados.find(function (recado) {
    return recado.id === idRecado;
  });

  if (dadosInvalidos) {
    // Se os dados forem inválidos, retorna um status 400 e uma mensagem de erro.
    res.status(400).send("Dados inválidos");
  } else if (!recadoEncontrado) {
    // Se o recado não for encontrado, retorna um status 404 e uma mensagem de erro.
    res.status(404).send("Recado não encontrado");
  } else {
    // Atualiza os campos do recado com os dados do corpo da requisição.
    recadoEncontrado.titulo = req.body.titulo;
    recadoEncontrado.descricao = req.body.descricao;

    // Retorna uma resposta JSON com a confirmação da atualização do recado.
    res.json({
      mensagem: "Recado atualizado com sucesso",
      recado: recadoEncontrado
    });
  }
});


app.delete("/recados/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const indice = recados.findIndex(function (recado) {
    return recado.id === id;
  });
  if (indice === -1) {
    res.status(404);
    res.send("Recado não encontrado");
  } else {
    recados.splice(indice, 1);
    res.json({
      mensagem: "Recado removido com sucesso",
    });
  }
});

app.listen(3000, function () {
  console.log("servidor rodando na porta 3000: url http://localhost:3000");
});