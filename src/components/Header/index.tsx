'use client';
import { useState } from 'react';
import { Logo } from '@/components/Assets/Logo';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState(currentLocale);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLocale; // Replace the current locale with the new one
    const newPathname = pathSegments.join('/');

    setLocale(newLocale);
    router.push(newPathname);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex justify-between items-center p-4 px-6 sm:px-10 w-full">
      <Link href={`/`}>
        <Logo className="h-14 w-auto sm:h-20" invert={true} />
      </Link>

      <nav className="hidden sm:flex items-center space-x-6">
      <div className="flex items-center space-x-2 ">
        <button
            onClick={() => handleLocaleChange('en')}
            className={`text-white text-sm ${
              locale === 'en' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            EN
          </button>
          <span className="text-white font-thin">|</span>
          <button
            onClick={() => handleLocaleChange('es')}
            className={`text-white text-sm ${
              locale === 'es' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            ES
          </button>
        </div>
        <Link
          href={`/`}
          className="text-white text-sm hover:text-gray-400 transition-opacity duration-300 font-extralight"
        >
          {t('home')}
        </Link>
        <Link
          href={`/about`}
          className="text-white text-sm hover:text-gray-400 transition-opacity duration-300 font-extralight"
        >
          {t('about')}
        </Link>
        <Link
          href={`/contact`}
          className="text-white text-sm hover:text-gray-400 transition-opacity duration-300 font-extralight"
        >
          {t('contact')}
        </Link>
      </nav>

      <div className="flex items-center space-x-2 sm:hidden">
        <button
          onClick={() => handleLocaleChange('en')}
          className={`text-white text-sm ${
            locale === 'en' ? 'opacity-100' : 'opacity-50'
          }`}
        >
          EN
        </button>
        <span className="text-white font-thin">|</span>
        <button
          onClick={() => handleLocaleChange('es')}
          className={`text-white text-sm ${
            locale === 'es' ? 'opacity-100' : 'opacity-50'
          }`}
        >
          ES
        </button>

        <button onClick={toggleMenu} className="text-white text-2xl">
          <HiOutlineMenu />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-end p-8 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="text-white text-3xl mb-8"
            >
              <HiOutlineX />
            </button>
            <nav className="flex flex-col text-right font-semibold  text-white text-3xl space-y-8">
              <Link href={`/`} onClick={toggleMenu}>
                {t('home')}
              </Link>
              <Link href={`/about`} onClick={toggleMenu}>
                {t('about')}
              </Link>
              <Link href={`/contact`} onClick={toggleMenu}>
                {t('contact')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
