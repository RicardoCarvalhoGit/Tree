import { Request, Response } from "express";
const { PrismaClient } = require('@prisma/client');
import  nodemailer from "nodemailer";

const prisma = new PrismaClient();

// 1. Buscar solicitações pendentes
export const getPendingRequests = async (req: Request, res: Response) => {
  try {
    const requests = await prisma.certificados.findMany({
      where: { status: "Pendente" },
    });
    res.json(requests);
  } catch (error) {
    console.error("Erro ao buscar solicitações:", error);
    res.status(500).json({ error: "Erro ao buscar solicitações." });
  }
};

// 2. Buscar detalhes de uma solicitação por ID
export const getRequestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const request = await prisma.certificados.findUnique({
      where: { id: Number(id) },
    });

    if (!request) {
      return res.status(404).json({ error: "Solicitação não encontrada." });
    }

    res.json(request);
  } catch (error) {
    console.error("Erro ao buscar detalhes da solicitação:", error);
    res.status(500).json({ error: "Erro ao buscar detalhes da solicitação." });
  }
};

// 3. Atualizar status da solicitação
export const updateRequestStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await prisma.certificados.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.json({ message: "Status atualizado com sucesso." });
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    res.status(500).json({ error: "Erro ao atualizar status." });
  }
};

// 4. Enviar email após aprovação
export const sendRequestEmail = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const request = await prisma.certificados.findUnique({
      where: { id: Number(id) },
    });

    if (!request) {
      return res.status(404).json({ error: "Solicitação não encontrada." });
    }

    // Configuração do nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Ou outro serviço
      auth: {
        user: process.env.EMAIL_USER, // Defina isso no .env
        pass: process.env.EMAIL_PASS, // Defina isso no .env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: request.contato_email,
      subject: "Certificação Aprovada!",
      text: `Parabéns, ${request.razao_social}! Sua certificação foi aprovada.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "E-mail enviado com sucesso." });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar e-mail." });
  }
};
