'use server';

import { getRequestContext } from '@cloudflare/next-on-pages';
import { createDB } from '@/db';
import { mailingList } from '@/db/schema';
import { eq } from 'drizzle-orm';

type RequestBody = {
  email: string;
};

export async function addToMailingList(email: string) {
  const DB = getRequestContext().env.DB;
  const drizzle = await createDB(DB);

  const lowerCaseEmail = email.toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
  if (!lowerCaseEmail || !emailRegex.test(lowerCaseEmail)) {
    return { error: 'Invalid or missing email', status: 400 };
  }

  const existingEmail = await drizzle
    .select()
    .from(mailingList)
    .where(eq(mailingList.email, lowerCaseEmail))
    .execute();

  if (existingEmail.length > 0) {
    return { error: 'Email already exists', status: 400 };
  }

  const res = await drizzle
    .insert(mailingList)
    .values({
      email: lowerCaseEmail,
      name: '',
      subscribedOn: new Date().toISOString(),
      status: 'active',
    })
    .execute();

  return { result: res, status: 200 };
}
