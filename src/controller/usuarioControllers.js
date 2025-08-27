import usuarioService from "../service/usuarioServices.js"

async function criarUsuarioController(request, resolve) {
    const novoUsuario = request.body

    try {
        const usuario = await usuarioService.criarUsuarioService(novoUsuario)
        resolve.status(201).send({usuario})
    } catch (err) {
        return resolve.status(400).send(err.menssagem)
    }
}

export default {
    criarUsuarioController
}