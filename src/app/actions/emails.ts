'use server';

import { Resend } from 'resend';
import QuestionEmail from '@/emails/Question'; 

const resend = new Resend(process.env.RESEND_API_KEY || '');
const adminEmail = process.env.ADMIN_EMAIL || '';

export async function sendQuestion(
  senderEmail: string, 
  senderName: string, 
  company: string, 
  phone: string, 
  message: string, 
  budget: string
) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: adminEmail,
      subject: `Nuevo Mensaje Enviado | ${senderName}`,
      react: (
        QuestionEmail({ 
          senderEmail, 
          senderName, 
          company, 
          phone, 
          message, 
          budget 
        })
      ),
    });
    return { message: 'Email sent successfully' };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: 'Error sending email: ' + error.message };
    } else {
      return { error: 'An unknown error occurred' };
    }
  }
}
