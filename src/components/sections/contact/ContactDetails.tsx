import { useTranslations } from 'next-intl';
import { FadeIn } from "@/components/effects/FadeIn";
import { Border } from "@/components/Border";
import { Offices } from "@/components/Offices";
import { SocialMedia } from '@/components/SocialMedia';
import Link from 'next/link';

export default function ContactDetails() {
  const t = useTranslations('contact.contactDetails');

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-white">
        {t('ourOffices')}
      </h2>
      <p className="mt-6 text-base text-neutral-400">
        {t('officeDescription')}
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-white">
          {t('emailUs')}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-white">{t('emails.careers')}</dt>
            <dd>
              <Link
                href="mailto:careers@hestialabs.io"
                className="text-neutral-400 hover:text-white"
              >
                careers@hestialabs.io
              </Link>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-white">{t('emails.press')}</dt>
            <dd>
              <Link
                href="mailto:press@hestialabs.io"
                className="text-neutral-400 hover:text-white"
              >
                press@hestialabs.io
              </Link>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-white">
          {t('followUs')}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}
