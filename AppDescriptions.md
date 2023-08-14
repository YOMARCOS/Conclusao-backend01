# Documentação do Aplicativo 📚

Esta documentação fornece uma visão geral do aplicativo, sua estrutura, rotas e funcionalidades. O aplicativo é desenvolvido usando o framework Express.js para criar uma API para cadastro de usuários e gerenciamento de recados. ✉️📝

## Visão Geral 👁️

O aplicativo é uma API REST que permite cadastrar usuários, criar, listar, buscar, atualizar e remover recados. Ele é construído utilizando a linguagem JavaScript e o framework Node.js, juntamente com o pacote Express para o gerenciamento de rotas. 🚀

## Instalação ⚙️

1. Certifique-se de ter o Node.js instalado no seu sistema. 📦
2. Clone o repositório do aplicativo para o seu ambiente. 📂
3. Abra o terminal na pasta raiz do aplicativo e execute o seguinte comando para instalar as dependências:


      ~npm install

# Uso 🖥️
Inicie o servidor executando o seguinte comando na pasta raiz do aplicativo:
npm start

O servidor estará em execução na porta especificada no arquivo app.js. 🏃

Use uma ferramenta de API client (como o Postman) para interagir com as rotas disponíveis. 🛠️

# Rotas 🛤️ 
Usuários 👥


POST /users/cadastrar: Cadastra um novo usuário. ✅

POST /users/login: Efetua o login do usuário. 🔑

GET /users/listar: Lista todos os usuários. 📋

Recados 📝

POST /recados/create: Cria um novo recado. 📌 

GET /recados/listar: Lista todos os recados. 🗒️

GET /recados/search/:id: Busca um recado por ID. 🔍

PUT /recados/:id: Atualiza um recado por ID. ✏️

DELETE /recados/:id: Remove um recado por ID. 🗑️

# Estrutura do Projeto 🏗️
A estrutura do projeto é organizada da seguinte maneira:

app.js: Arquivo principal do aplicativo, configura o servidor e os middlewares.

src/: Pasta contendo os arquivos relacionados à lógica do aplicativo.

routes/: Pasta contendo os arquivos de definição de rotas.

controllers/: Pasta contendo os controladores responsáveis pela lógica das rotas.

components/: Pasta para armazenar os dados do aplicativo (usuários, recados, etc.).

# Contribuição 🤝
Contribuições para melhorias e correções são bem-vindas! Sinta-se à vontade para enviar pull requests ou reportar problemas. 👍