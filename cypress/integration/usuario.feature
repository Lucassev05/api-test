Feature: CRUD de Usuários

		Conjunto de endpoints responsáveis por Criar, Editar, Listar, Deletar e Detalhar Usuários

Background:
Given Estou autenticado no sistema

		Scenario: Criar Usuário
		When eu tento criar um usuário
		Then a aplicação deve retornar o usuário criado
		And devo poder visualizar o usuário na listagem de usuários

		Scenario: Alterar dados de usuário
		When eu tento editar um usuário
		Then a aplicação deve retornar o usuário editado
		And devo poder visualizar o usuário editado no endpoint de detalhamento de usuários

		Scenario: Deletar dados de usuário
		When eu tento excluir um usuário
		Then a aplicação deve retornar a confirmação de deleção
		And devo não visualizar o usuário deletado no endpoint de listagem de usuários