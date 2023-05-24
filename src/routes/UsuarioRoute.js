const { getUsuarioController } = require("../factories/UsuarioFactory")

function rota(app) {
    const controller = getUsuarioController()
    app.get('/usuarios', (req, res) => controller.buscarTodos(req, res))
    app.post('/usuarios', (req, res) => controller.criarUsuario(req, res))
    app.put('/usuarios/:id', (req, res) => controller.atualizarUsuario(req, res))
    app.delete('/usuarios/:id', (req, res) => controller.deletarUsuario(req, res))
    app.put('/usuarios/adicionar-link/:id', (req, res) => controller.adicionarLink(req, res))
    app.put('/usuarios/editar-link/:id', (req, res) => controller.editarLink(req, res))
    app.put('/usuarios/deletar-link/:id', (req, res) => controller.deletarLink(req, res))
    app.get('/usuarios/recuperar-senha/:email', (req, res) => controller.recuperarSenha(req, res))
    app.put('/usuarios/atualizar-senha/:token', (req, res) => controller.atualizarSenha(req, res))
    app.post('/login', 
        (req, res) => controller
        .login(req, res)
    )
}

module.exports = rota