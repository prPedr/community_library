import sqlite3 from "sqlite3"

const db = new sqlite3.Database("biblioteca_db.sqlite", (err) => {
    if (err) {
        console.log("Erro ao se conectar ao Banco de Dados.")
    } else {
        console.log("Conectado ao Banco de Dados.")
    }
})

export default db