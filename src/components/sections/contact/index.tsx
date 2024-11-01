'use client';
import { useTranslations } from 'next-intl';
import ContactDetails from '@/components/sections/contact/ContactDetails';
import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import ContactForm from '@/components/sections/contact/ContactForm';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <>
      <PageIntro eyebrow={t('pageIntro.eyebrow')} title={t('pageIntro.title')}>
        <p>{t('pageIntro.description')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
