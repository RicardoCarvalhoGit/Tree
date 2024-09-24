const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// rota empresa
app.post('/empresa', async (req, res) => {
  const { nome_emp, CNPJ_emp, email_emp, contato_emp, endereco_emp, senha_emp } = req.body;

  try {
    if (!nome_emp || !CNPJ_emp || !email_emp || !contato_emp || !endereco_emp || !senha_emp) {
      return res.status(400).json({ error: "Todos os campos obrigatórios devem ser fornecidos" });
    }

    const empresa = await prisma.cadastro_empresa.create({
      data: {
        nome_emp,
        CNPJ_emp,
        email_emp,
        contato_emp,
        endereco_emp,
        senha_emp,
      }
    });

    res.json(empresa);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar empresa", message: error.message });
  }
});


// rota cliente
app.post('/cliente', async (req, res) => {
  const { nome, cpf, email, telefone, senha } = req.body;

  try {
    if (!nome || !cpf || !email || !telefone || !senha ) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const cliente = await prisma.cadastro_cliente.create({
      data: {
        nome,
        cpf,
        email,
        telefone,
        senha
      }
    });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar cliente", message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
