import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodemailerService } from './services/nodemailer/nodemail-mail-service';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailService = new NodemailerService()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailService);

  await submitFeedbackUseCase.execute({
    type, comment, screenshot
  })

  return res.status(201).send()
})