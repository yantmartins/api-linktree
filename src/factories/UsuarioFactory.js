const UsuarioController = require("../controllers/UsuarioController");
const UsuarioModel = require("../models/usuarioModel");
const UsuarioService = require("..//services/UsuarioService");

function getUsuarioService() {
    const usuarioService = new UsuarioService(UsuarioModel)
    return usuarioService
}

function getUsuarioController() {
    const service = getUsuarioService()
    const usuarioController = new UsuarioController(service)
    return usuarioController
}

module.exports = { getUsuarioService, getUsuarioController }