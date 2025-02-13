import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { GridPattern } from "@/components/effects/GridPattern";
import Header from "@/components/Header";  
import { Footer } from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });



export default async function RootLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

    if (!routing.locales.includes(locale as any)) {
        notFound();
      
    }
    const messages = await getMessages();
     
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
            <Header /> 
            <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full opacity-75 fill-[rgb(21,21,21)] stroke-[rgba(15,15,15,0.05)] [mask-image:linear-gradient(to_bottom_left,rgb(255,255,255)_30%,transparent_60%)]"
            yOffset={-96}
            interactive
            />
            {children}
            <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
