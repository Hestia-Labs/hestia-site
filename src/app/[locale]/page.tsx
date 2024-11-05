 
import { getTranslations } from 'next-intl/server';
import { type Metadata } from 'next';
import LandingSection from "../../components/sections/landing";

type MetadataParams = {
  params: {
    locale: string;
  };
};

export const runtime = "edge";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: 'landing' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.openGraph.title'),
      description: t('metadata.openGraph.description'),
      url: `https://hestialabs.io/${locale}/` ,
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

export default function Home() {
  return (
     
      <LandingSection />
 
  );
}