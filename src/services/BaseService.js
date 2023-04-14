const erros = require("../errors")

class BaseService {
    constructor(model) {
        this.model = model
    }

    async buscarTodos() {
        return await this.model.find({})
        
    }

    async buscarPorId(id) {
        return await this.model.findOne({ _id: id})
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
    
    atualizar(id, dados) {

    }

    deletar(id) {
       
    }
}

module.exports = BaseService