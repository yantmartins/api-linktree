module.exports = Object.freeze({
    geral: {
        itemJaExiste: {
            mensagem: 'Ocorreu um erro ao criar o regitro! Item já exite',
            statusCode: 400,
            code: 'GEN0002'
        },
        erroAoCriarRegistro: {
            mensagem: 'Ocorreu um erro ao criar o regitro',
            statusCode: 422,
            code: 'GEN0001'
        },
        idNaoInformado: {
            mensagem: 'O campo ID não foi informado',
            statusCode: 400,
            code: 'GEN0003'
        },
        erroAoAtualizarRegistro: {
            mensagem: 'Ocorreu um erro ao atualizar o registro',
            statusCode: 422,
            code: 'GEN0004'
        },
        erroAoDeletarRegistro: {
            mensagem: 'Ocorreu um erro ao deletar o registro',
            statusCode: 422,
            code: 'GEN0005'
        }
    },
    usuario: {
        erroAoBuscarUsuariosAtivos: {
            mensagem: 'Um erro ocorreu ao buscar os Usuarios Ativos',
            statusCode: 422,
            code: 'USU0001',
        },
        erroAoCriarUsuario:  {
            mensagem: 'Um erro ocorreu ao criar o Usuario',
            statusCode: 422,
            code: 'USU0002',
        },
        usuarioNaoEncontrado: {
            mensagem: 'Usuario não encontrado',
            statusCode: 400,
            code: 'USU0003'
        },
        erroAoInserirLink : {
            mensagem: 'Ocorreu um erro ao inserir o link',
            statusCode: 422,
            code: 'USU0004'
        },
        linkNaoEncontrado: {
            mensagem: 'Link não encontrado',
            statusCode: 400,
            code: 'USU0005'
        },
        loginInvalido : {
            mensagem: 'Usuario ou Senha Incorretos',
            statusCode: 401,
            code: 'USU0006'
        }
    }
})