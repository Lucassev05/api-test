const {
  criarUsuario,
  validarResponse,
  procurarUsuarioEmListagem,
} = require("../../controllers/usuarios/usuarios");

When("eu tento criar um usuário", () => {
  criarUsuario();
});

Then("a aplicação deve retornar o usuário criado", () => {
  validarResponse("responseCriacao");
});

And("devo poder visualizar o usuário na listagem de usuários", () => {
  procurarUsuarioEmListagem("responseCriacao");
});
