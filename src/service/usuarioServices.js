import usuariosRepositories from "../repositories/usuarioRepositories.js"

async function criarUsuarioService(novoUsuario) {
    const usuario = await usuariosRepositories.criarUsuarioRepositories(novoUsuario)
    return usuario
}

export default {
    criarUsuarioService
}