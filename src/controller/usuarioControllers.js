import { response } from "express"
import usuarioService from "../service/usuarioServices.js"

async function criarUsuarioController(request, resolve) {
    const novoUsuario = request.body

    try {
        const usuario = usuarioService.criarUsuarioService(novoUsuario)
        resolve.status(201).send({usuario})
    } catch (err) {
        return response.status(400).send(err.menssagem)
    }
}

export default {
    criarUsuarioController
}