import { getTranslations } from 'next-intl/server';
import  ContactSection   from '@/components/sections/contact';

type MetadataParams = {
    params: {
      locale: string;
    };
  };
  
  export const runtime = "edge";
  
  export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.openGraph.title'),
      description: t('metadata.openGraph.description'),
      url: `https://hestialabs.io/${locale}/contact`,
      siteName: "Hestia Labs",
      images: [
        {
          url: "/hestia.png",
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

export default function Contact() {
  return (
    <ContactSection/>
  );
}
