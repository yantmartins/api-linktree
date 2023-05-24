class UsuarioController {
    constructor(service) {
        this.usuarioService = service
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body
            const resultado = await this.usuarioService
                .login(email, senha)
            return res.status(200).send(resultado)
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    }
    async atualizarSenha(req, res) {
        try {
            const { token } = req.params
            const { novaSenha } = req.body
            const resultado = await this.usuarioService
                .atualizarSenha(token, novaSenha)
            return res.status(200).send(resultado)
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async buscarTodos(req, res) {
        try {
            const resultado = await this.usuarioService.buscarTodos()
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async criarUsuario(req, res) {
        try {
            const dados = req.body
            const resultado = await this.usuarioService.criarUsuario(dados)
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const atualizado = await this.usuarioService.atualizar(id, dados)

            return res.status(200).send(atualizado)
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async deletarUsuario(req, res) {
        try {
            const id = req.params.id
            const deletado = await this.usuarioService.deletar(id)

            return res.status(200).send({
                deletado,
                mensagem: 'Usuario deletado com sucesso'
            })
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async adicionarLink(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const resultado = await this.usuarioService.adicionarLink(id, dados)
            return res.status(200).send(resultado)
        } catch (error) {
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async editarLink(req, res) {
        try {
            const idUsuario = req.params.id;
            const dados = req.body
            const resultado = await this.usuarioService.editarLink(idUsuario, dados)
            return res.status(200).send(resultado)
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode || 500).send(error)
        }
    }

    async deletarLink(req, res) {
        console.log(req)
        try {
            const idUsuario = req.params.id;
            const idDoLink = req.body.idDoLink
            const resultado = await this.usuarioService
                .deletarLink(idUsuario, idDoLink)
            return res
                .status(200)
                .send(resultado)

        } catch (error) {
            console.log(error)
            return res
                .status(error.statusCode || 500)
                .send(error)
        }
    }

    async recuperarSenha(req, res) {
        try {
            const email = req.params.email
            const resultado = await this.usuarioService.recuperarSenha(email)
            return res
                .status(200)
                .send(resultado)
        } catch (error) {
            console.log(error)
            return res
                .status(error.statusCode || 500)
                .send(error)
        }
    }
}

module.exports = UsuarioController