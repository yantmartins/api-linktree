const erros = require("../errors")
const bcrypt = require("bcrypt")
const BaseService = require("./BaseService")
const SALT_ROUNDS = 10

class UsuarioService extends BaseService {
    constructor(model) {
        super(model)
    }

    async buscarTodosAtivos() {
        try {
            return await this.model.find({ ativo: true})
        } catch (error) {
            console.log(error);
          throw erros.usuario.erroAoBuscarUsuariosAtivos
        }
    }

    async criarUsuario(dados) {
        try {
            const hash = bcrypt.hashSync(dados.senha, SALT_ROUNDS);
            const dadosFormatados = {
                nome: dados.nome,
                email: dados.email,
                senha: hash,
                links: []
            }

            const usuarioCriado = await this.inserir(dadosFormatados)

            return usuarioCriado
        } catch (error) {
            if(error.mensagem) throw error

            console.log(error);

            throw erros.usuario.erroAoCriarUsuario
        }
    }
}
module.exports = UsuarioService