'use client';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/effects/FadeIn';
import { CodeBracketIcon, LifebuoyIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function LandingSection() {
  const t = useTranslations('landing');

  const cards = [
    {
      name: t('services.service1.name'),
      description: t('services.service1.description'),
      icon: CodeBracketIcon,
    },
    {
      name: t('services.service2.name'),
      description: t('services.service2.description'),
      icon: LifebuoyIcon,
    },
    {
      name: t('services.service3.name'),
      description: t('services.service3.description'),
      icon: GlobeAltIcon,
    },
  ];

  return (
    <motion.div
      className="flex flex-col justify-center items-center pt-12 sm:pt-24 px-4 sm:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <Container className="flex justify-center items-center">
        <FadeIn className="text-center max-w-2xl sm:max-w-5xl">
          <motion.h1
            className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white [text-wrap:balance]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
          >
            {t('pageIntro.title')}
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
          >
            {t('pageIntro.description')}
          </motion.p>
        </FadeIn>
      </Container>
      <motion.div
        className="mt-10 sm:mt-16 grid max-w-xl grid-cols-1 gap-4 sm:max-w-2xl sm:gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.2, ease: 'easeIn' }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.name}
            className="flex gap-x-4 rounded-lg bg-white/5 p-4 sm:p-6 ring-1 ring-inset ring-white/10"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ ease: 'easeIn' }}
          >
            <card.icon
              aria-hidden="true"
              className="h-6 w-6 sm:h-7 sm:w-7 flex-none text-indigo-400"
            />
            <div className="text-sm sm:text-base">
              <h3 className="font-semibold text-white">{card.name}</h3>
              <p className="mt-1 sm:mt-2 text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
