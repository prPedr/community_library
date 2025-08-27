import usuariosRepositories from "../repositories/usuarioRepositories.js"

async function criarUsuarioService(novoUsuario) {
    const procurarUsuario = await usuariosRepositories.procurarUsuarioPorEmail(novoUsuario.email)
    if (procurarUsuario) throw new Error("E-mail já cadastrado")
    const usuario = await usuariosRepositories.criarUsuarioRepositories(novoUsuario)
    return usuario
}

export default {
    criarUsuarioService
}