const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); 
const mysql = require('mysql2');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// ROTA DE CADASTRO PARA EMPRESA
app.post('/empresa', async (req, res) => {
  const { nome_emp, CNPJ_emp, email_emp, contato_emp, endereco_emp, senha_emp } = req.body;

  try {
    if (!nome_emp || !CNPJ_emp || !email_emp || !contato_emp || !endereco_emp || !senha_emp) {
      return res.status(400).json({ error: "Todos os campos obrigatórios devem ser fornecidos" });
    }

    const hashedPassword = await hashPassword(senha_emp);

    const empresa = await prisma.cadastro_empresa.create({
      data: {
        nome_emp,
        CNPJ_emp,
        email_emp,
        contato_emp,
        endereco_emp,
        senha_emp: hashedPassword,
      },
    });

    res.json(empresa);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar empresa", message: error.message });
  }
});

// ROTA DE CADASTRO PARA CLIENTE
app.post('/cliente', async (req, res) => {
  const { nome, cpf, email, telefone, senha } = req.body;

  try {
    if (!nome || !cpf || !email || !telefone || !senha) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const hashedPassword = await hashPassword(senha); 

    const cliente = await prisma.cadastro_cliente.create({
      data: {
        nome,
        cpf,
        email,
        telefone,
        senha: hashedPassword, 
      },
    });

    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar cliente", message: error.message });
  }
});

// ROTA DE LOGIN PARA EMPRESA
app.post('/login_empresa', async (req, res) => {
  const { CNPJ_emp, email_emp, senha_emp } = req.body;

  try {
    if (!CNPJ_emp || !email_emp || !senha_emp) {
      return res.status(400).json({ error: "CNPJ, email e senha são obrigatórios" });
    }

    const empresa = await prisma.cadastro_empresa.findUnique({
      where: { CNPJ_emp },
    });

    if (!empresa) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }

    const passwordMatch = await comparePasswords(senha_emp, empresa.senha_emp);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({ message: "Login bem-sucedido", empresa });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login", message: error.message });
  }
});

// ROTA DE LOGIN PARA CLIENTE
app.post('/login_cliente', async (req, res) => {
  const { cpf, email, senha } = req.body;

  try {
    if (!cpf || !email || !senha) {
      return res.status(400).json({ error: "CPF, email e senha são obrigatórios" });
    }

    const cliente = await prisma.cadastro_cliente.findUnique({
      where: { cpf },
    });

    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const passwordMatch = await comparePasswords(senha, cliente.senha);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    res.json({ message: "Login bem-sucedido", cliente });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login", message: error.message });
  }
});

// Configuração do banco de dados
const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
  } else {
      console.log('Conectado ao banco de dados!');
  }
});

// Endpoint para receber os dados do formulário
app.post('/api/certification-request', (req, res) => {
  const {
      companyName,
      cnpj,
      address,
      sector,
      contactName,
      contactEmail,
      contactPhone,
      motivation,
  } = req.body;

  const sql = `INSERT INTO certificados
      (razao_social, cnpj, endereco, setor, contato_nome, contato_email, contato_telefone, particas_sustentaveis)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [companyName, cnpj, address, sector, contactName, contactEmail, contactPhone, motivation], (err, result) => {
      if (err) {
          console.error('Erro ao inserir dados:', err);
          res.status(500).send('Erro ao salvar a solicitação.');
      } else {
          res.status(201).send('Solicitação salva com sucesso!');
      }
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
