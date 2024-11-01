'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import { StatList, StatListItem } from '@/components/StatList';
import { SectionIntro } from '@/components/SectionIntro';
import { GridList, GridListItem } from '@/components/GridList';
import { FadeIn } from '@/components/effects/FadeIn';
import { Offices } from '@/components/Offices';
import { Button } from '@/components/Button';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <motion.div
      id="about"
      className="text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <Container className="flex justify-start items-center">
        <PageIntro
          eyebrow={t('pageIntro.eyebrow')}
          title={t('pageIntro.title')}
        >
          <motion.p
            className="text-sm text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
          >
            {t('pageIntro.description')}
          </motion.p>
          <motion.div
            className="mt-10 max-w-2xl space-y-6 text-sm text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeIn' }}
          >
            <p>{t('details.mission')}</p>
            <p>{t('details.team')}</p>
          </motion.div>
        </PageIntro>
      </Container>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value={t('stats.foundingBrothers')}
            label={t('statsLabels.foundingBrothers')}
          />
          <StatListItem
            value={t('stats.clientSatisfaction')}
            label={t('statsLabels.clientSatisfaction')}
          />
          <StatListItem
            value={t('stats.cupsOfCoffee')}
            label={t('statsLabels.cupsOfCoffee')}
          />
        </StatList>
      </Container>
      <Culture />
      <ContactSection />
    </motion.div>
  );
}

function Culture() {
  const t = useTranslations('about.culture');

  return (
    <div className="mt-24 rounded-3xl py-24 sm:mt-32 lg:mt-40 lg:py-32 relative overflow-hidden text-white">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ '--gradient-angle': '0deg' }}
        animate={{ '--gradient-angle': '45deg' }}
        transition={{ duration: 5, ease: 'easeInOut', fill: 'forwards' }}
        style={{
          background:
            'linear-gradient(var(--gradient-angle), rgb(21,21,21 ), rgba(0, 0, 0, 0.15))',
          backgroundBlendMode: 'overlay',
        }}
      ></motion.div>

      {/* Content */}
      <SectionIntro
        eyebrow={t('eyebrow')}
        title={t('title')}
        invert
      >
        <p>{t('description')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t('values.loyalty')} invert>
            {t('values.loyalty')}
          </GridListItem>
          <GridListItem title={t('values.trust')} invert>
            {t('values.trust')}
          </GridListItem>
          <GridListItem title={t('values.compassion')} invert>
            {t('values.compassion')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-gradient-to-b from-[rgb(21,21,21)] to-black px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              {t('pageIntro.title')}
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                {t('contactForm.submitButton')}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/40 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                {t('contactDetails.ourOffices')}
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
