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
            return await this.model.find({ ativo: true })
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

    async buscarUsuarioPorId(id){
        const usuario = await this.model.findOne({ _id: id })
        if(!usuario || !usuario._id) {
            throw erros.usuario.usuarioNaoEncontrado
        }
        return usuario
    }

    async deletarLink(idDoUsuario, idDoLink) {
        const usuario = await this.buscarUsuarioPorId(idDoUsuario)
        const indexLink = usuario.links.findIndex(link => link._id == idDoLink)
        if(indexLink == -1) {
           throw erros.usuario.linkNaoEncontrado 
        }
        usuario.links.splice(indexLink, 1)

        const resultado = await this.atualizar(usuario._id, usuario)
        return resultado
    }

    async editarLink(idDoUsuario, dados){
        const usuario = await this.buscarUsuarioPorId(idDoUsuario)
        const indexLink = usuario.links.findIndex(link => link._id == dados._id)
        
        if(indexLink == -1) {
            throw erros.usuario.linkNaoEncontrado
        }
        const copia = usuario.links[indexLink]

        usuario.links[indexLink] = {
            _id: copia._id,
            nome: dados.nome || copia.nome,
            tipo: copia.tipo,
            url: dados.url || copia.url
        }
        const resultado = await this.atualizar(usuario._id, usuario)
        return resultado
    }


    async adicionarLink(idUsuario, dados) {
        try {
            const usuario = await this.buscarUsuarioPorId(idUsuario)
            usuario.links.push({
                tipo: dados.tipo,
                nome: dados.nome,
                url: dados.url
            })
            const resultado = await this.atualizar(usuario._id, usuario)
            return resultado
        } catch (error) {
            console.log(error)
            if(error.code && error.mensagem) throw error
            throw erros.usuario.erroAoInserirLink
        }
    }


}


module.exports = UsuarioService