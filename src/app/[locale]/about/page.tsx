import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import AboutSection from '@/components/sections/about';

type MetadataParams = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.openGraph.title'),
      description: t('metadata.openGraph.description'),
      url: `https://hestialabs.io/${locale}about` ,
      siteName: "Hestia Labs",
      images: [
        {
          url: "/hestia-about.png",
          width: 800,
          height: 600,
          alt: t('metadata.openGraph.alt'),
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutSection />
    </main>
  );
}
