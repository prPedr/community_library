// Criacao do banco de dados

import sqlite3 from "sqlite3"

const db = new sqlite3.Database("biblioteca_db.sqlite", (err) => {
    if (err) {
        console.log("Erro ao conectar ao banco de dados")
    } else {
        console.log("Conexão bem sucessida")
    }
})

export default db