import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/effects/FadeIn';
import { Logo } from '@/components/Assets/Logo';
import { socialMediaProfiles } from '@/components/SocialMedia';

function Navigation() {
  const t = useTranslations('footer');

  const navigation = [
    {
      title: t('company'),
      links: [
        { title: t('home'), href: '/' },
        { title: t('about'), href: '/about' },
        { title: t('contact'), href: '/contact' }
      ]
    },
    {
      title: t('connect'),
      links: socialMediaProfiles
    }
  ];

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-300">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link href={link.href} className="transition hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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

function NewsletterForm() {
  const t = useTranslations('footer.newsletter');

  return (
    <form className="max-w-sm">
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
    </form>
  );
}

export function Footer() {
  const t = useTranslations('footer');

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
            {t('copyright')} {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
