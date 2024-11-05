'use client';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/effects/FadeIn';
import { Button } from '@/components/Button';
import { useState } from 'react';
import { sendQuestion } from '@/app/actions/emails'; 

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-700 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={props.id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  );
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-700 outline-none checked:border-[0.5rem] checked:border-white focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-white">{label}</span>
    </label>
  );
}

export default function ContactForm() {
  const t = useTranslations('contact.contactForm');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendQuestion(
        formData.email,
        formData.name,
        formData.company,
        formData.phone,
        formData.message,
        formData.budget
      );

      if (response.error) {
        setStatusMessage(response.error);
      } else {
        setStatusMessage('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          budget: '',
        });
      }
    } catch (error) {
      setStatusMessage('An error occurred while sending the email.');
    }
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-white">
          {t('workInquiries')}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-neutral-800/50">
          <TextInput
            label={t('fields.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <TextInput
            label={t('fields.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <TextInput
            label={t('fields.company')}
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
          />
          <TextInput
            label={t('fields.phone')}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          <TextInput
            label={t('fields.message')}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="border border-neutral-700 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-400">{t('budget.legend')}</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label={t('budget.options.8k')}
                  name="budget"
                  value="8000"
                  onChange={handleChange}
                  checked={formData.budget === '8000'}
                />
                <RadioInput
                  label={t('budget.options.15k')}
                  name="budget"
                  value="15000"
                  onChange={handleChange}
                  checked={formData.budget === '15000'}
                />
                <RadioInput
                  label={t('budget.options.30k')}
                  name="budget"
                  value="30000"
                  onChange={handleChange}
                  checked={formData.budget === '30000'}
                />
                <RadioInput
                  label={t('budget.options.50k')}
                  name="budget"
                  value="50000"
                  onChange={handleChange}
                  checked={formData.budget === '50000'}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button invert type="submit" className="mt-10">
          {t('submitButton')}
        </Button>
        {statusMessage && <p className="mt-4 text-white">{statusMessage}</p>}
      </form>
    </FadeIn>
  );
}
