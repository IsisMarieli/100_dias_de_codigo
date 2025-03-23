const sqlite3 = require('sqlite3');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('./database.db');

// Criando a tabela no banco de dados
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users(
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT
    )`);
});

const users = {
    id: new Date().toISOString(),
    name: 'João',
    email: 'exemple@exemple.com'
};

// Inserindo e cadastrando usuários no banco de dados
db.run(`INSERT INTO users (id, name, email) VALUES (?, ?, ?)`,
    [users.id, users.name, users.email], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Usuário criado com sucesso');
        }
    }
);

// Obtendo usuário para visualizar com JSON
app.get('/users', (req, res) => {
    db.all(`SELECT * FROM users`, (err, rows) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(200).json(rows);
        }
    });
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
