# Projeto Carrinho de Compras (CLI) - Node.js

## Sobre

Este projeto simula um carrinho de compras no terminal, com foco em prática de JavaScript e Node.js. A proposta é reproduzir operações comuns de e-commerce de forma simples: adicionar produtos, listar itens, remover quantidades e fechar a compra.

O projeto foi desenvolvido no bootcamp da DIO como exercício de lógica, estrutura de dados e organização de código por módulos.

---

## Funcionalidades

* Listagem de produtos (Xbox e PlayStation)
* Adição de produtos ao carrinho
* Visualização do carrinho
* Remoção de itens por quantidade
* Cálculo automático do valor total
* Simulação de pagamento (PIX, crédito e débito)
* Encerramento do sistema por menu

---

## Estrutura do projeto

### `item.js`

Define o modelo de item do carrinho, com:

* nome
* preço
* quantidade
* cálculo de subtotal

### `cart.js`

Centraliza as regras de negócio do carrinho:

* adicionar item
* listar itens
* remover quantidade
* calcular total

### `index.js`

Ponto de entrada da aplicação, responsável por:

* menu interativo com `readline`
* fluxo principal da aplicação
* interação no terminal
* simulação de pagamento

---

## Tecnologias

* Node.js
* JavaScript (ES Modules)
* `readline` (módulo nativo)

---

## Como executar

1. Tenha o Node.js instalado
2. No diretório do projeto, execute:

```bash
node index.js
```

---

## Aprendizados

Durante o desenvolvimento, os principais pontos praticados foram:

* modularização de código
* manipulação de arrays e objetos
* entrada de dados via terminal
* implementação de regras de negócio em um cenário realista

---

## Próximos passos

* persistência do carrinho em arquivo
* autenticação de usuário
* versão com interface gráfica (web)
* melhorias de usabilidade no terminal

---

Projeto criado para fins de estudo.
