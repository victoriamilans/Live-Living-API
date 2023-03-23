# Live-Living-API

### Live Living é uma api que tem como objetivo gerenciar uma imobiliária através de um CRUD de usuários e rotas de GET/POST de propriedades, categorias e agendamentos.
[API Doc](https://live-living-api-doc.vercel.app/)
A URL base da aplicação: https://localhost:3000

---

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
    - [Scripts](#34-scripts)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [Pg](https://www.npmjs.com/package/pg)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Pg](https://www.npmjs.com/package/pg)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo as relações entre as tabelas do banco de dados.

<p align="center">
   <img src="https://user-images.githubusercontent.com/106447484/221994078-85f5e377-7b15-4cea-9759-90e220041cc5.png"  width="500" height="500"/>
</p>

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4. Scripts

Executar aplicação em ambiente de desenvolvimento:

```
yarn dev
```
---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-Users)
- [Login](#2-Login)
- [Categories](#3-Answers)
- [Properties](#4-Questions)
- [Schedules](#5-Schedules)

---

[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário.                  |
| GET      | /users     | Lista todos os usuários                 |
| GET      | /users/:user_id     | Lista um usuário usando seu ID como parâmetro |
| PATCH    | /users/:user_id     | Editar as informações do usuário usando seu ID como parâmetro   |
| DELETE    | /users/:user_id     | Deletar usuário usando seu ID como parâmetro   

---

## 2. **Login**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /login     | Autentica o usuário para ter acesso ao sistema.       |

---

## 3. **Categories**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /categories     | Criação de categoria.                  |
| GET      | /categories     | Lista todos as categorias.                 |
| GET    | /categories/:propertie_id     | Lista todas as categorias de uma propriedade |

---

## 4. **Properties**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /properties     | Criação de propriedade.                  |
| GET      | /properties     | Lista todos as propriedades.                 |

---

## 5. **Schedules**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /schedules     | Criação de agendamentos.                  |
| GET      | /schedules/properties/:property_id   | Lista todos os agendamentos de uma propriedade.                 |

---



