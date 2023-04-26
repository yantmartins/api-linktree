const jwt = require("jsonwebtoken")
const senha = process.env.TOKEN_SENHA

function gerarToken(conteudo) {
    const token = jwt.sign(conteudo, senha)
    return token
}

module.exports = {
    gerarToken
}