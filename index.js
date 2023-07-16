import express from "express"; //importano express

const app = express();   //ativando
app.use(express.json());  // definindo tipo de texto
//lista de usuarios com as seguintes propriedades
//usario.nome
//usuario.senha
//usuario.email
//usuario.identificador
const users = [];
let idUser = 0;

//lista de recados com as seguintes propriedades
//recado.titulo
//recado.descricao
//recado.identificador
const recados = [];
let idRecado = 0;

// deve receber um json no body com as seguintes propriedades
// body.nome
// body.senha
// body.email: deve ser unico
app.post("/cadastro-users", function (req, res) {
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
    const novoUser = {
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
    };
    novoUser.id = idUser;
    idUser++;
    users.push(novoUser);
    res.json({
      mensagem: "Usuário criado com sucesso",
      user: novoUser,
    });
  }
});

app.post("/users/login", function (req, res) {
  const email = req.body.email;
  const senha = req.body.senha;

  const userValid = users.find(function (user) {
    return user.email === email && user.senha === senha;
  });
  if (userValid) {
    res.json({
      mensagem: "Usuário logado com sucesso",
      usuario: userValid,
    });
  } else {
    res.status(401);
    res.send("Email ou senha inválidos");
  }
});

app.post("/users/listagem", function (req, res) {
  res.json(users)
})
// crud de recados

app.post("/recados", function (req, res) { // criando recado
  let userExistente = false;
  const inputInvalido = !req.body.titulo || !req.body.descricao || !req.body.email;
  if (inputInvalido) {
    res.status(400);
    res.send("Entrada inválida, preencha os campos corretamente");
  } else {
    const novoRecado = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      email: req.body.email
    };
    for (const user of users) {
      if (user.email === req.body.email) {
        userExistente = true;
      }
    }
  if (userExistente) {
    novoRecado.id = idRecado;
    recados.push(novoRecado);
    idRecado++;
    res.json({
      mensagem: "Recado criado com sucesso",
      recado: novoRecado,
    });
  } else {
    res.status(400)
    res.send("User não encontrado")
  }
}
});
//buscar recado
app.get("/recados/:email/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const recadoEncontrado = recados.find(function (recado) {
    return recado.id === id;
  });
  if (recadoEncontrado) {
    res.json({
      mensagem: "Recado encontrado",
      recado: recadoEncontrado
    });
  } else {
    res.status(404);
    res.send("Recado não encontrado");
  }
});
// atualizar recado
app.put("/recados/:email/:id", function (req, res) {
  const enInvalid = !req.body.titulo || !req.body.descricao;
  // atualizar um recado
  const id = parseInt(req.params.id);
  const recadoEncontrado = recados.find(function (recado) {
    return recado.id === id;
  });
  if (enInvalid) {
    res.status(400);
    res.send("Dados inválidos");
  } else if (!recadoEncontrado) {
    res.status(404);
    res.send("Recado não encontrado");
  } else {
    recadoEncontrado.titulo = req.body.titulo;
    recadoEncontrado.descricao = req.body.descricao;
    res.json({
      mensagem: "Recado atualizado com sucesso",
      recado: recadoEncontrado,
    });
  }
});

app.delete("/recados/:email/:id", function (req, res) {
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