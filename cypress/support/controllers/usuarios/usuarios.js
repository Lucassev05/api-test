/// <reference types="Cypress" />
const { request } = require("../../utils/commonFunctions");
const faker = require("faker");

const genders = ["female", "male"];
const usuario = {
  name: `${faker.name.firstName() + " " + faker.name.lastName()}`,
  email: faker.internet.email(),
  gender: faker.random.arrayElement(genders),
  status: "Active",
};

const usuarioEditado = {
  name: `${faker.name.firstName() + " " + faker.name.lastName()}`,
  email: faker.internet.email(),
  gender: faker.random.arrayElement(genders),
  status: "Active",
};

function criarUsuario() {
  request("POST", "/users", {
    body: usuario,
  }).then((response) => {
    //encapsulamento da resposta
    cy.wrap(response).as("responseCriacao");
    //salvando id do usuário como variavel de ambiente
    Cypress.env("usuarioId", response.body.data.id);
  });
}

function editarUsuario() {
  request("PUT", `/users/${Cypress.env("usuarioId")}`, {
    body: usuarioEditado,
  }).then((response) => {
    //encapsulamento da resposta
    cy.wrap(response).as("responseEdicao");
  });
}

function excluirUsuario() {
  request("DELETE", `/users/${Cypress.env("usuarioId")}`).then((response) => {
    //encapsulamento da resposta
    cy.wrap(response).as("responseExclusao");
  });
}

function validarResponse(reponseAlias) {
  let validarUsuario;

  if (reponseAlias == "responseCriacao") {
    validarUsuario = {
      code: 201,
      user: usuario,
    };
  } else if (reponseAlias == "responseEdicao") {
    validarUsuario = {
      code: 200,
      user: usuarioEditado,
    };
  } else if (reponseAlias == "responseExclusao") {
    validarUsuario = {
      code: 204,
    };
  }

  cy.get(`@${reponseAlias}`).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.code).to.equal(validarUsuario.code);

    if (reponseAlias == "responseExclusao") {
      expect(response.body.meta).to.be.null;
      expect(response.body.data).to.be.null;
    } else {
      expect(response.body.data.name).to.equal(validarUsuario.user.name);
      expect(response.body.data.email).to.equal(validarUsuario.user.email);
      expect(response.body.data.gender).to.equal(validarUsuario.user.gender);
      expect(response.body.data.status).to.equal(
        validarUsuario.user.status.toLocaleLowerCase()
      );
      expect(response.body.data.id).to.be.a("number");
    }
  });
}

//EDITAR PARA ACEITAR NA CRIAÇÃO, NA EDIÇÃO E NA DELEÇÃO
function procurarUsuarioEmListagem(reponseAlias) {
  const queryString = {
    qs: {
      id: Cypress.env("usuarioId"),
    },
  };

  //requisição do endpoint Listar todos os Usuários
  request("GET", "/users", queryString).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.code).to.equal(200);

    if (reponseAlias == "responseCriacao") {
      //validação de dados
      expect(response.body.data[0].id).to.equal(Cypress.env("usuarioId"));
      expect(response.body.data[0].name).to.equal(usuario.name);
      expect(response.body.data[0].email).to.equal(usuario.email);
      expect(response.body.data[0].gender).to.equal(usuario.gender);
      expect(response.body.data[0].status).to.equal(
        usuario.status.toLocaleLowerCase()
      );
      //validando meta
      expect(response.body.meta.pagination.total).to.equal(1);
      expect(response.body.meta.pagination.pages).to.equal(1);
    } else if (reponseAlias == "responseExclusao") {
      expect(response.body.data).to.have.length(0);
      //validando meta
      expect(response.body.meta.pagination.total).to.equal(0);
      expect(response.body.meta.pagination.pages).to.equal(0);
    }
    expect(response.body.meta.pagination.page).to.equal(1);
    expect(response.body.meta.pagination.limit).to.equal(20);
  });
}

//EDITAR PARA ACEITAR QUALQUER ALIAS
function detalharUsuarioEditado() {
  cy.get("@responseEdicao").then((putResponse) => {
    const id = putResponse.body.data.id;

    //requisição do endpoint Listar todos os Usuários
    request("GET", `/users/${id}`).then((response) => {
      //validação de dados
      expect(response.status).to.equal(200);
      expect(response.body.code).to.equal(200);
      expect(response.body.data.id).to.equal(id);
      expect(response.body.data.name).to.equal(usuarioEditado.name);
      expect(response.body.data.email).to.equal(usuarioEditado.email);
      expect(response.body.data.gender).to.equal(usuarioEditado.gender);
      expect(response.body.data.status).to.equal(
        usuarioEditado.status.toLocaleLowerCase()
      );
    });
  });
}

module.exports = {
  criarUsuario,
  validarResponse,
  procurarUsuarioEmListagem,
  detalharUsuarioEditado,
  editarUsuario,
  excluirUsuario,
};
