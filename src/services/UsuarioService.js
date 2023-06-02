const erros = require("../errors");
const bcrypt = require("bcrypt");
const BaseService = require("./BaseService");
const SALT_ROUNDS = 10;

class UsuarioService extends BaseService {
  constructor(model, emailService, tokenService) {
    super(model);
    this.emailService = emailService;
    this.tokenService = tokenService;
    this.salt = bcrypt.genSaltSync(SALT_ROUNDS);
  }
  async login(email, senha) {
    const usuario = await this.model.findOne({ email });

    if (!usuario || !usuario._id) {
      throw erros.usuario.loginInvalido;
    }

    const ehValido = bcrypt.compareSync(senha, usuario.senha);

    if (!ehValido) {
      throw erros.usuario.loginInvalido;
    }

    const tokenDeSessao = this.tokenService.gerarToken({
      _id: usuario._id,
      email: usuario.email,
    });

    return {
      token: tokenDeSessao,
      nome: usuario.nome,
      email: usuario.email,
    };
  }
  async atualizarSenha(token, novaSenha) {
    const email = this.tokenService.verificarToken(token);

    const usuario = await this.model.findOne({ email });

    if (!usuario || !usuario._id) {
      throw erros.usuario.usuarioNaoEncontrado;
    }
    const hash = bcrypt.hashSync(novaSenha, this.salt);
    usuario.senha = hash;
    const atualizado = await this.atualizar(usuario._id, usuario);
    return atualizado;
  }

  async recuperarSenha(email) {
    const usuario = await this.model.findOne({ email });

    if (!usuario || !usuario._id) {
      throw erros.usuario.usuarioNaoEncontrado;
    }

    const token = this.tokenService.gerarToken(usuario.email);
    await this.emailService.enviarTokenRecuperarSenha(usuario.email, token);

    return "Código enviado no Email :)";
  }

  async buscarTodosAtivos() {
    try {
      return await this.model.find({ ativo: true });
    } catch (error) {
      console.log(error);
      throw erros.usuario.erroAoBuscarUsuariosAtivos;
    }
  }

  async criarUsuario(dados) {
    try {
      const hash = bcrypt.hashSync(dados.senha, 15);
      const dadosFormatados = {
        nome: dados.nome,
        email: dados.email,
        senha: hash,
        links: [],
      };

      const usuarioCriado = await this.inserir(dadosFormatados);

      return usuarioCriado;
    } catch (error) {
      if (error.mensagem) throw error;

      console.log(error);

      throw erros.usuario.erroAoCriarUsuario;
    }
  }

  async buscarUsuarioPorId(id) {
    const usuario = await this.model.findOne({
      _id: id,
    });
    if (!usuario || !usuario._id) {
      throw erros.usuario.usuarioNaoEncontrado;
    }
    return usuario;
  }

  async deletarLink(idDoUsuario, idDoLink) {
    const usuario = await this.buscarUsuarioPorId(idDoUsuario);
    const indexLink = usuario.links.findIndex((link) => link._id == idDoLink);
    if (indexLink == -1) {
      throw erros.usuario.linkNaoEncontrado;
    }
    usuario.links.splice(indexLink, 1);

    const resultado = await this.atualizar(usuario._id, usuario);
    return resultado;
  }

  async editarLink(idDoUsuario, dados) {
    const usuario = await this.buscarUsuarioPorId(idDoUsuario);
    const indexLink = usuario.links.findIndex((link) => link._id == dados._id);

    if (indexLink == -1) {
      throw erros.usuario.linkNaoEncontrado;
    }
    const copia = usuario.links[indexLink];

    usuario.links[indexLink] = {
      _id: copia._id,
      nome: dados.nome || copia.nome,
      tipo: copia.tipo,
      url: dados.url || copia.url,
    };
    const resultado = await this.atualizar(usuario._id, usuario);
    return resultado;
  }

  async adicionarLink(idUsuario, dados) {
    try {
      const usuario = await this.buscarUsuarioPorId(idUsuario);
      usuario.links.push({
        tipo: dados.tipo,
        nome: dados.nome,
        url: dados.url,
      });
      const resultado = await this.atualizar(usuario._id, usuario);
      return resultado;
    } catch (error) {
      console.log(error);
      if (error.code && error.mensagem) throw error;
      throw erros.usuario.erroAoInserirLink;
    }
  }

  async buscarLinks() {
    try {
      const result = await this.model
        .find({
          links: {
            $exists: true,
            $not: { $size: 0 },
          },
        }, 'nome links _id')
        .exec();
      return result;
    } catch (err) {
      console.log(err);
      if (err.code && err.mensagem) throw err;
      throw erros.usuario.erroAoBuscarLinks;
    }
  }
}

module.exports = UsuarioService;