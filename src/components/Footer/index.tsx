import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/effects/FadeIn';
import { Logo } from '@/components/Assets/Logo';
import Navigation from './Navigation';
import NewsletterForm from './NewsletterForm';






export function Footer() {

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-white/40 pt-12">
          <Link href="/" aria-label="Home">
            <Logo invert className="h-16" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-300">
            © Hestia Labs {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
