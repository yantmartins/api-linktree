module.exports = Object.freeze({
    geral: {
        itemJaExiste: {
            mensagem: "Ocorreu um erro ao criar o registro! Item já existente",
            statusCode: 400,
            code: "GEN0002"
        },
        erroAoCriarRegistro: {
            mensagem: "Ocorreu um erro ao criar o registro",
            statusCode: 422,
            code: "GEN0001"
        },
        idNaoInformado: {
            mensagem: "O campo ID não foi informado",
            statusCode: 400,
            code: "GEN0003"
        },
        erroAoAtualizarRegistro: {
            mensagem: "Ocorreu um erro ao atualizar o registro",
            statusCode: 422,
            code: "GEN0004"
        },
        erroAoDeletarRegistro: {
            mensagem: "Ocorreu um erro ao deletar o registro",
            statusCode: 422,
            code: "GEN0005"
        }
       },
       usuario: {
        erroAoBuscarUsuarioAtivos: {
            mensagem: "Um erro ocorreu ao buscar os Usuarios Ativos",
            statusCode: 422,
            code: "USU0001",
        },
        erroAoCriarUsuario: {
            mensagem: "Um erro ocorreu ao criar o Usuario",
            statusCode: 422,
            code: "USU0002",
        },
        usuarioNaoEncontrado: {
            mensagem: "Um erro ocorreu ao encontrar o Usuário Ativo",
            statusCode: 400,
            code: "US0003"
        },
        erroAoInserirLink: {
            mensagem: "Um erro ocorreu ao inserir o link",
            statusCode: 422,
            code: "US0004"
        },

        linkNaoEncontrado: {
                mensagem: "Link não encontrado",
                statusCode: 400,
                code: "US0005"
        },
        loginInvalido: {
            mensagem: "Usuário ou Senha Incorretos",
            statusCode: 401,
            code: "US0006"
        }
       }
})