import db from "../config/bancoDados.js"

db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
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
                    resolve({id: this.ultimoID, ...novoUsuario})
                }
            }
        )
    })
}

function procurarEmailRepositories(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, nomeUsuario, email, avatar
            FROM usuarios
            WHERE email = ?`, [email], (err, linhaUsuario) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaUsuario)
                }
            }
        )
    })
}

export default {
    criarUsuarioRepositories,
    procurarEmailRepositories
}