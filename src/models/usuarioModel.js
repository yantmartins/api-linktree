const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    links: [
        {
            tipo: {
                type: String,
                required: true
            },
            nome: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
}, {timestamps: true})


const UsuarioModel = mongoose.model('Usuario', UsuarioSchema)

module.exports = UsuarioModel