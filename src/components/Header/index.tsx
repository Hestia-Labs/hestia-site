'use client';
import { useState } from 'react';
import { Logo } from '@/components/Assets/Logo';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState(currentLocale);

  const handleLocaleChange = (newLocale: string) => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLocale; // Replace the current locale with the new one
    const newPathname = pathSegments.join('/');

    setLocale(newLocale);
    router.push(newPathname);
  };

  return (
    <header className="flex justify-between items-center p-4 px-10 w-full">
      <Link href={`/${locale}`}>
        <Logo className="h-20 w-auto" invert={true} />
      </Link>

      <nav className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleLocaleChange('en')}
            className={`text-white text-sm transition-opacity duration-300 font-thin ${
              locale === 'en' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            EN
          </button>
          <span className="text-white font-thin">|</span>
          <button
            onClick={() => handleLocaleChange('es')}
            className={`text-white text-sm transition-opacity duration-300 font-thin ${
              locale === 'es' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            ES
          </button>
        </div>
        <Link
          href={`/`}
          className="text-white hover:text-gray-400 transition-opacity duration-300 font-extralight hover:opacity-75"
        >
          {t('home')}
        </Link>
        <Link
          href={`/about`}
          className="text-white hover:text-gray-400 transition-opacity duration-300 font-extralight hover:opacity-75"
        >
          {t('about')}
        </Link>
        <Link
          href={`/contact`}
          className="text-white hover:text-gray-400 transition-opacity duration-300 font-extralight hover:opacity-75"
        >
          {t('contact')}
        </Link>
      </nav>
    </header>
  );
}
