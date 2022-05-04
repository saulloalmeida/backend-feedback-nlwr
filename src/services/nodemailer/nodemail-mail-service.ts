import nodemailer from 'nodemailer';
import { MailService } from "../mail-service";
import { SendMailData } from './../mail-service';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d0573ff8878965",
    pass: "c9a3dec9a634be"
  }
});
export class NodemailerService implements MailService {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedbackApp <suporte@feedbackapp.com>",
      to: "Saullo Almeida <saullorhamon@gmail.com>",
      subject,
      html: body,
    })
  }
}