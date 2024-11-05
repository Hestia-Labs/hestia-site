/** @type {import('next').NextConfig} */
 
import createNextIntlPlugin from 'next-intl/plugin';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
 
const withNextIntl = createNextIntlPlugin();
 

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

const nextConfig = {};
 
export default withNextIntl(nextConfig); 
