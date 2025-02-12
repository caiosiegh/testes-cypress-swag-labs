# 🧪 Testes Automatizados com Cypress - Swag Labs

Este repositório contém testes automatizados para o site [Swag Labs](https://www.saucedemo.com/) utilizando Cypress.

## 📌 Sobre o Projeto
O objetivo é validar funcionalidades essenciais do site, como:
- **Login** (com sucesso e falha)
- **Persistência de sessão** (permanecer logado após recarregar a página)
- **Carrinho de compras** (adicionar, remover e verificar itens)
- **Finalização de compra**

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- JavaScript - Linguagem de programação
- Node.js - Gerenciamento de pacotes e execução

## 📂 Estrutura do Projeto
```
testes-cypress-swag-labs
│── cypress/
│   ├── e2e/               # Arquivos de testes
│   ├── fixtures/          # Massa de dados (opcional)
│   ├── support/           # Comandos customizados (opcional)
│── package.json           # Dependências e scripts do projeto
│── cypress.config.js      # Configuração do Cypress
│── README.md              # Documentação do projeto
│── .gitignore             # Arquivos ignorados pelo Git
```

## 🛠️ Como Rodar os Testes
1. **Clone este repositório**  
   ```sh
   git clone https://github.com/caiosiegh/testes-cypress-swag-labs.git
   ```
2. **Acesse a pasta do projeto**  
   ```sh
   cd testes-cypress-swag-labs
   ```
3. **Instale as dependências**  
   ```sh
   npm install
   ```
4. **Execute os testes em modo interativo (UI do Cypress)**  
   ```sh
   npx cypress open
   ```
5. **Ou execute os testes no terminal (modo headless)**  
   ```sh
   npx cypress run
   ```

## 📌 Testes Implementados
- ✅ **Login com sucesso**  
- ✅ **Login com usuário incorreto**  
- ✅ **Login com senha incorreta**  
- ✅ **Persistência de sessão após refresh**  
- ✅ **Adicionar itens ao carrinho**  
- ✅ **Remover itens do carrinho**  
- ✅ **Comprar sem itens no carrinho**  

## 📢 Contribuição
Se quiser contribuir, sinta-se à vontade para abrir uma issue ou um pull request!

---

📌 **Autor:** [Caio Siegh](https://github.com/caiosiegh)  
🚀 **Projeto para estudo e prática de automação de testes!**