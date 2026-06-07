import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import WhatsAppFloat from '@/components/site/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-poppins', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://globeonexim.com'),
  title: {
    default: 'Globeon Exim — Indian Agricultural & Natural Product Exporter',
    template: '%s | Globeon Exim',
  },
  description: 'Globeon Exim is a trusted Indian export company connecting premium agricultural and natural products — Moringa Powder, Turmeric Powder, herbs and commodities — to global markets.',
  keywords: ['Export Company India','Agricultural Exporter','Moringa Exporter','Turmeric Exporter','Global Trade Company','Indian Spice Exporter','Herbal Products Export'],
  authors: [{ name: 'Globeon Exim' }],
  openGraph: {
    title: 'Globeon Exim — Connecting Indian Quality to Global Markets',
    description: 'Trusted export partner for agricultural and natural products from India.',
    url: 'https://globeonexim.com',
    siteName: 'Globeon Exim',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globeon Exim — Indian Agricultural Exporter',
    description: 'Trusted export partner for agricultural and natural products.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Globeon Exim',
    url: 'https://globeonexim.com',
    description: 'Indian export company for agricultural and natural products.',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    sameAs: [],
  };
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
