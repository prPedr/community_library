import express, { json } from "express"
import usuarioRoutes from "../community_library/src/routes/usuarioRoutes.js"

const app = express()

app.use(express.json())
app.use(usuarioRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})