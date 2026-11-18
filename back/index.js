import express from 'express';
import db from './repository/index.js';
import cors from 'cors';
 
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())
 
// C
app.post('/api/v1/pessoa', (req, res) => {
    const { id, cpf, email } = req.body
 
    if (!id || !cpf || !email){
        res.send({ message: "Cadastro não efetuado."})
        return
    }
    db.push({ id, cpf, email})
    res.send({ message: "Usuário cadastrado com sucesso!"})
});
 
// R
app.get('/api/v1/pessoa/:id', (req, res) => {
  const { id } = req.params;
  const pessoa = db.find(p => p.id == id);
 
  if (!pessoa) {
    return res.send({ message: 'Usuário não encontrado.' });
  }
 
  res.send(pessoa);
});
   
// U
app.put('/api/v1/pessoa/:id', (req, res) => {
    const { id } = req.params;
    const pessoa = db.find(p => p.id == id);
    const { cpf, email } = req.body;
 
    if (!pessoa) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
    }
   
    if (!cpf && !email){
        return res.status(400).send({ message: 'Insira algum dado para modificar!'});
    }
 
    if (cpf) pessoa.cpf = cpf;
    if (email) pessoa.email = email;
 
    res.send(pessoa);
});
 
// D
app.delete('/api/v1/pessoa/:id', (req, res) => {
    const { id } = req.params;
    const index = db.findIndex(p => p.id == id);
 
    if (index === -1) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
    }
 
    db.splice(index, 1);
 
    res.send({ message: 'Usuário deletado com sucesso!' });
});
 
 
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});