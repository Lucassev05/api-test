const {
  editarUsuario,
  validarResponse,
  detalharUsuarioEditado,
} = require("../../controllers/usuarios/usuarios");

When("eu tento editar um usuário", () => {
  editarUsuario();
});
Then("a aplicação deve retornar o usuário editado", () => {
  validarResponse("responseEdicao");
});
And(
  "devo poder visualizar o usuário editado no endpoint de detalhamento de usuários",
  () => {
    detalharUsuarioEditado();
  }
);
