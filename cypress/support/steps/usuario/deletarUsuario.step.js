const {
  excluirUsuario,
  validarResponse,
  procurarUsuarioEmListagem,
} = require("../../controllers/usuarios/usuarios");

When("eu tento excluir um usuário", () => {
  excluirUsuario();
});
Then("a aplicação deve retornar a confirmação de deleção", () => {
  validarResponse("responseExclusao");
});
And(
  "devo não visualizar o usuário deletado no endpoint de listagem de usuários",
  () => {
    procurarUsuarioEmListagem("responseExclusao");
  }
);
