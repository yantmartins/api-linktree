class UsuarioController {
    constructor(service) {
        this.usuarioService = service
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
}

module.exports = UsuarioController