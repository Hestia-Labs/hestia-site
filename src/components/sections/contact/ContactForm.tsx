'use client';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/effects/FadeIn';
import { Button } from '@/components/Button';
import { useId } from 'react';

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId();
  
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-700 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
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

  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-white">
          {t('workInquiries')}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-neutral-800/50">
          <TextInput label={t('fields.name')} name="name" autoComplete="name" />
          <TextInput
            label={t('fields.email')}
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label={t('fields.company')}
            name="company"
            autoComplete="organization"
          />
          <TextInput label={t('fields.phone')} type="tel" name="phone" autoComplete="tel" />
          <TextInput label={t('fields.message')} name="message" />
          <div className="border border-neutral-700 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-400">{t('budget.legend')}</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label={t('budget.options.25')} name="budget" value="25" />
                <RadioInput label={t('budget.options.50')} name="budget" value="50" />
                <RadioInput label={t('budget.options.100')} name="budget" value="100" />
                <RadioInput label={t('budget.options.150')} name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button invert type="submit" className="mt-10">
          {t('submitButton')}
        </Button>
      </form>
    </FadeIn>
  );
}
