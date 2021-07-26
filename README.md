# Teste de Api - Cypress
> Repositório de teste automáticos com cypress e cucumber.


Desenvolvido com cypress e utilizando o cucumber, esse repositório contém alguns testes automatizados com objetivo de validar um conjunto de endpoints capazes de Criar,
Editar, Listar, Detalhar e Deletar usuário.

Casos de Testes Executados:
- Criar usuário e validar se é retornado no endpoint 'Listar todos Usuários'
- Editar usuário e validar se o usuário editado é retornado no endpoint de 'Listar um Único Usuário'
- Deletar usuário e validar se foi removido do endpoint 'Listar todos Usuários'

![](../header.png)

## Instalação

- Instalação do Node
- Clone do projeto
- Configuração
- Execução do projeto

### Node

- Para instalação do Node, é necessário fazer o donwload no link: https://nodejs.org/
- Após donwload, faça a devida instalação antes de seguir para os proximos passos

### Clone

> Clone o repositório

```shell
$ git clone git@github.com:Lucassev05/api-test.git
```
ou

```shell
$ git clone https://github.com/Lucassev05/api-test.git
```

### Configuração

> Instale os packges

```shell
$ npm install
```

### Execução
> Execute os testes

```shell
$ npm run cypress
```

Para visualizar melhor os testes e as validações feitas, sugiro executar o teste via interface
```shell
$ npm run cypress:open
```

### Gerar relatório HTML
```shell
$ npm run report
```
- Relatório em processo de aprimoramento, portanto os metadados estão fixos e não refletem as configurações usadas para rodar os testes.
- obs: Para gerar corretamente o relatório, é necessário executar todos os testes sem interrupção.

## Tecnologias Utilizadas
- <a href="https://nodejs.org/" target="_blank">Node.js</a>
- <a href="https://www.cypress.io/" target="_blank">Cypress</a>
- <a href="https://github.com/TheBrainFamily/cypress-cucumber-preprocessor" target="_blank">Cypress Cucumber Preprocessor</a>
- <a href="https://github.com/wswebcreation/multiple-cucumber-html-reporter" target="_blank">Multiple Cucumber HTML Reporter</a>
