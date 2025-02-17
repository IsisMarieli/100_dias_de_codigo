const express = require('express')
const cors = require('cors')

// criando dois Middleware's => é um intermediário que processa requisições e respostas dentro de uma aplicação
// Um intermediário é algo que fica entre duas partes e facilita a comunicação ou interação entre elas.
const app = express()
app.use(express.json())  
app.use(cors()) 

app.listen(8000, () => console.log("Servidor rodando na porta 8080"))


