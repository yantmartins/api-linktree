const jwt = require('jsonwebtoken')
const senha = process.env.TOKEN_SENHA


function gerarToken(conteudo) {
    const token = jwt.sign(conteudo, senha)
    return token
}

function verificarToken(token){
    return jwt.verify(token, senha) //devolve o email se for valido
}

module.exports = {
    gerarToken,
    verificarToken
}