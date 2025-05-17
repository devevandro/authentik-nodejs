# 🔐 authentik-node-example

Este projeto demonstra como integrar o **Authentik** como provedor de autenticação via OIDC em uma aplicação Node.js com Express, usando o pacote `express-openid-connect`.

---

## ✨ Funcionalidades

- ✅ Login com Authentik (OIDC)
- 🔒 Middleware para proteger rotas com `requiresAuth()`
- 👤 Rota `/me` para retornar os dados do usuário autenticado
- 🚪 Rota `/logout` com remoção de cookies de sessão
- ❤️ Rota `/health` para checagem de status da aplicação

---

## 🧰 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Authentik](https://goauthentik.io/) (como provedor OIDC)
- [express-openid-connect](https://www.npmjs.com/package/express-openid-connect)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/authentik-node-example.git
cd authentik-node-example
yarn install && yarn dev
cp .env.template .env
