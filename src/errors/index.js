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
        }
       }
})