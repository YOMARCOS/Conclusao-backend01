# Checklist de Funcionalidades do Servidor

Este checklist contém as atividades a serem implementadas no servidor.

## Funcionalidades

- [x] Criação de servidor
- [x] Regras de Funcionalidades
    - [x] Cadastro de usuário
    - [x] Login de usuário
    - [x] Listagem de usuários
    - [x] Exclusão de usuário
    - [x] Criação de recado
    - [x] Listagem de recados
    - [x] Edição de recados
    - [x] Exclusão de recados

## Detalhes das Funcionalidades

### Cadastro de Usuário
- [x] Implementar rota para cadastrar um novo usuário
- [x] Validar dados de entrada (por exemplo, campos obrigatórios, formato de e-mail)
- [x] Armazenar informações do usuário no banco de dados

### Login de Usuário
- [x] Implementar rota para realizar login de usuário
- [x] Verificar credenciais do usuário no banco de dados
- [x] Gerar e retornar token de autenticação

### Listagem de Usuários
- [x] Implementar rota para listar todos os usuários cadastrados
- [x] Retornar lista de usuários em formato JSON

### Exclusão de Usuário
- [x] Implementar rota para excluir um usuário pelo ID
- [x] Remover informações do usuário do banco de dados

### Criação de Recado
- [x] Implementar rota para criar um novo recado
- [x] Associar recado ao usuário que o criou
- [x] Armazenar informações do recado no banco de dados

### Listagem de Recados
- [x] Implementar rota para listar todos os recados
- [x] Retornar lista de recados em formato JSON

### Edição de Recados
- [x] Implementar rota para editar um recado pelo ID
- [x] Verificar se o usuário logado é o proprietário do recado
- [x] Atualizar informações do recado no banco de dados

### Exclusão de Recados
- [x] Implementar rota para excluir um recado pelo ID
- [x] Verificar se o usuário logado é o proprietário do recado
- [x] Remover informações do recado do banco de dados

