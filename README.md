# Carrinho da Shopee (Node.js)

Projeto desenvolvido no bootcamp da DIO com foco em lógica de programação e modularização em JavaScript. A aplicação simula o comportamento de um carrinho de compras no terminal, permitindo gerenciar itens e calcular valores automaticamente.

## Descrição

Neste projeto, o carrinho armazena produtos, controla quantidade e exibe subtotal/total da compra. A ideia é praticar uma regra de negócio muito comum em e-commerce, usando uma estrutura simples e bem organizada.

## Funcionalidades

- Adicionar item ao carrinho
- Remover item do carrinho
- Calcular subtotal por produto
- Calcular total geral da compra
- Listar itens adicionados

## Estrutura de pastas

```text
Carrinho da shopee/
├── arquitetura.png
├── documentação.md
├── package.json
├── readme.md
└── src/
    ├── index.js
    └── services/
        ├── cart.js
        └── item.js
```

## Tecnologias

- Node.js
- JavaScript (ES Modules)

## Como executar

1. Abra o terminal na pasta do projeto
2. Execute:

```bash
node src/index.js
```

## Aprendizados

- Organização de código por responsabilidade
- Criação de funções reutilizáveis
- Modelagem de regras de negócio
- Separação entre item e carrinho para facilitar manutenção

## Próximas melhorias

- Atualização de quantidade diretamente no carrinho
- Persistência dos dados em arquivo
- Validações mais completas de entrada
- Interface web para visualização dos itens

---

Projeto para fins de estudo.
