const erros = require('../errors')

class BaseService {
    constructor(model) {
        this.model = model
    }

    async buscarTodos() {
        return await this.model.find({})
    }

    async buscarPorId(id) {
        return await this.model.findOne({ _id: id })
    }

    async inserir(dados) {
        try {
            return await this.model.create(dados)   
        } catch (error) {
            console.log(error);
            if(error.code == 11000) {
                throw erros.geral.itemJaExiste
            }
            throw erros.geral.erroAoCriarRegistro
        }
    }

    async atualizar(id, dados) {
        if(!id) {
            throw erros.geral.idNaoInformado
        }
        try {
            const atualizado = await this.model.findOneAndUpdate({_id: id}, dados, {new: true, upsert: false})
            return atualizado
        } catch (error) {
            console.log(error)
            throw erros.geral.erroAoAtualizarRegistro
        }
    }

    async deletar(id) {
        if(!id) {
            throw erros.geral.idNaoInformado
        }
        try {
            const deletado = await this.model.findOneAndDelete({_id: id})
            return deletado
        } catch (error) {
            console.log(error)
            throw erros.geral.erroAoDeletarRegistro
        }
    }
}

module.exports = BaseService