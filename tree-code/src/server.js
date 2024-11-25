const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require('multer');
const path = require('path');
const fs = require('fs'); 

const app = express();
const prisma = new PrismaClient();

// Criar pasta uploads se não existir
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuração do Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Destino dos arquivos enviados
  },
  filename: (req, file, cb) => {
    cb(null, `Certificado-${Date.now()}.pdf`); // Nome do arquivo com timestamp
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, 
  logger: true, 
});

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

// Endpoint para buscar solicitações
app.get("/api/requests", (req, res) => {
  const query = "SELECT * FROM certificados";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao buscar as solicitações: ", err);
      return res.status(500).json({ message: "Erro ao buscar solicitações" });
    }
    console.log("Resultados encontrados:", results);
    if (results.length === 0) {
      return res.status(404).json({ message: "Nenhuma solicitação encontrada" });
    }
    res.json(results);
  });
});

// Endpoint para manipular solicitações
router.put("/requests/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const query = "UPDATE certificados SET status = ? WHERE id = ?";
  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.error("Erro na query:", err);
      return res.status(500).json({ message: "Erro ao atualizar o status" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "ID não encontrado" });
    }

    res.status(200).json({ message: "Status atualizado com sucesso" });
  });
});

// Endpoint para mandar email com nodemailer
app.post('/send-email', upload.single('file'), async (req, res) => {
  console.log(req.file)
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID da solicitação é obrigatório." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "Arquivo não encontrado." });
  }

  try {
    const [solicitacao] = await db.promise().query(
      "SELECT contato_email, razao_social FROM certificados WHERE id = ?",
      [id]
    );

    if (solicitacao.length === 0) {
      return res.status(404).json({ error: "Solicitação não encontrada." });
    }

    const { contato_email: toEmail, razao_social } = solicitacao[0];

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: "Seu Certificado Sustentável Está Pronto!",
      text: `Olá, ${razao_social}!\n\nReconhecemos seu compromisso com a sustentabilidade ambiental e o meio ambiente. Segue em anexo o certificado ecológico emitido para sua empresa. Parabéns pela iniciativa!`,
      attachments: [
        {
          filename: req.file.filename, 
          path: req.file.path, 
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erro ao enviar o e-mail:", error);
        return res.status(500).json({ error: "Erro ao enviar o e-mail." });
      }

      res.status(200).json({ message: "E-mail enviado com sucesso!", info });
    });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).send('Erro ao enviar o e-mail.');
  }

});

// Inicializando o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
