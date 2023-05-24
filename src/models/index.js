const fs = require('fs')

function carregarModels() {
    const nomesDosArquivos = fs.readdirSync(__dirname)
    for (const nome of nomesDosArquivos) {
        if(nome != 'index.js') {
            console.log(`Carregando ${nome}`)
            require(`./${nome}`)
            //require('./' + nome)

        } 
    }
}   

module.exports = carregarModels