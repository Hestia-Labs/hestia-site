'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { addToMailingList } from '@/app/actions/addToMailingList';

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

export default function NewsletterForm() {
  const t = useTranslations('footer.newsletter');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);  
    setIsSuccess(false);

    const response = await addToMailingList(email);

    if (response.status === 400) {
      if (response.error === 'Email already exists') {
        setMessage(t('errorExists'));
      } else if (response.error === 'Invalid or missing email') {
        setMessage(t('errorInvalidEmail'));
      } else {
        setMessage(t('errorGeneric'));
      }
    } else {
      setEmail('');  
      setMessage(t('successMessage'));
      setIsSuccess(true);
    }
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-white">
        {t('title')}
      </h2>
      <p className="mt-4 text-sm text-neutral-300">
        {t('description')}
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={t('placeholder')}
          autoComplete="email"
          aria-label={t('placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full rounded-2xl border border-neutral-700 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-white/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label={t('submit')}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-white text-neutral-950 transition hover:bg-neutral-300"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
      {message && (
        <p className={`mt-2 text-sm ${isSuccess ? 'text-indigo-400' : 'text-red-900'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
