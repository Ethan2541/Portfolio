import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";
import Providers from "@/contexts/Providers";
import user from "@/data/user.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: user.name,
  description: "Pat pat",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="assets/favicon.ico" />
      </head>

      <body style={{ margin: "0" }}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
