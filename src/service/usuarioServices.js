import usuarioRepositories from "../repositories/usuarioRepositories.js"

async function criarUsuarioServices(novoUsuario) {
    const procurarUsuario = await usuarioRepositories.procurarEmailRepositories(novoUsuario.email)
    if (procurarUsuario) {
        throw new Error("Usuario existente no sistema")
    }
    const usuario = await usuarioRepositories.criarUsuarioRepositories(novoUsuario)
    return usuario
}

export default {
    criarUsuarioServices
}