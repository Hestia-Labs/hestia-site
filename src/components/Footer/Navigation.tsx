import { useTranslations } from 'next-intl';
import { socialMediaProfiles } from '@/components/SocialMedia';
import { Link } from '@/i18n/routing';

export default function Navigation() {
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