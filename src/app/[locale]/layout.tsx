import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Pat pat',
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body style={{margin: "0"}}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
