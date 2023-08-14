Aqui está a documentação das rotas do seu aplicativo utilizando o Express e os controllers fornecidos:

# Documentação de Rotas para Recados

A seguir, você encontrará a documentação das rotas disponíveis para gerenciar recados em seu aplicativo. Essas rotas são implementadas utilizando o framework Express.js e são controladas pelo `recadosController`.

## Listar Recados

Retorna uma lista de todos os recados cadastrados.

- **URL:** `/recados/listar`
- **Método:** GET

**Resposta de Sucesso:**

- **Código:** 200 (OK)
- **Conteúdo:** Array de objetos de recados.

## Criar Recado

Cria um novo recado com os dados fornecidos.

- **URL:** `/recados/create`
- **Método:** POST

**Parâmetros do Corpo da Requisição:**

- `titulo` (obrigatório): Título do recado.
- `descricao` (obrigatório): Descrição do recado.
- `idUser` (obrigatório): ID do usuário relacionado ao recado.

**Resposta de Sucesso:**

- **Código:** 201 (Criado)
- **Conteúdo:** Objeto do recado criado.

## Buscar Recado por ID

Busca um recado pelo ID fornecido.

- **URL:** `/recados/search/:id`
- **Método:** GET

**Parâmetros da URL:**

- `id` (obrigatório): ID do recado a ser buscado.

**Resposta de Sucesso:**

- **Código:** 200 (OK)
- **Conteúdo:** Objeto do recado encontrado.

## Atualizar Recado por ID

Atualiza um recado pelo ID fornecido.

- **URL:** `/recados/:id`
- **Método:** PUT

**Parâmetros da URL:**

- `id` (obrigatório): ID do recado a ser atualizado.

**Parâmetros do Corpo da Requisição:**

- `titulo` (obrigatório): Novo título do recado.
- `descricao` (obrigatório): Nova descrição do recado.

**Resposta de Sucesso:**

- **Código:** 200 (OK)
- **Conteúdo:** Objeto do recado atualizado.

## Remover Recado por ID

Remove um recado pelo ID fornecido.

- **URL:** `/recados/:id`
- **Método:** DELETE

**Parâmetros da URL:**

- `id` (obrigatório): ID do recado a ser removido.

**Resposta de Sucesso:**

- **Código:** 200 (OK)
- **Conteúdo:** Mensagem de confirmação da remoção.

---

Lembre-se de que as rotas devem ser ajustadas conforme necessário para se adequarem ao seu aplicativo e aos controladores implementados. Certifique-se de ter o middleware `body-parser` ou equivalente configurado para processar os dados do corpo da requisição.

Além disso, assegure-se de que as funcionalidades e validações necessárias sejam implementadas nos controladores correspondentes. Essa documentação serve como um guia básico para entender as rotas disponíveis em seu aplicativo.