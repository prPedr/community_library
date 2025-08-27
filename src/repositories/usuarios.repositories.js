// Se conecta ao banco de dados para fazer as requisicoes que necessitamos

import db from "../config/bancoDados.js"

db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTO INCREMENT,
        nomeUsuario TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        avatar TEXT
    )`
)

function criarUsuarioRepositories(novoUsuario) {
    const {nomeUsuario, email, senha, avatar} = novoUsuario
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO usuarios (nomeUsuario, email, senha, avatar)
            VALUES (?, ?, ?, ?)`,

            [nomeUsuario, email, senha, avatar],

            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({mensagem: "Usuario criado"})
                }
            }
        )
    })
}

export default {
    criarUsuarioRepositories
}