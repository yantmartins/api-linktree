const UsuarioController = require('../controllers/UsuarioController');
const UsuarioModel = require('../models/UsuarioModel')
const UsuarioService = require("../services/UsuarioService");

const TokenService = require('./../services/TokenService')
const EmailService = require('./../services/EmailService')

function getUsuarioService() {
    const usuarioService = new UsuarioService(
        UsuarioModel, 
        EmailService, 
        TokenService
    )
    return usuarioService
}

function getUsuarioController() {
    const service = getUsuarioService()
    const usuarioController = new UsuarioController(service)
    return usuarioController
}

module.exports = { getUsuarioService, getUsuarioController }