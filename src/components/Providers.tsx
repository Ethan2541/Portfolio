'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from '../themes'; // Assurez-vous que le chemin est correct
import { NextIntlClientProvider } from 'next-intl';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React from 'react';
import { ModeProvider, useMode } from '@/contexts/ModeProvider';

export default function Providers({ children, locale, messages }: { readonly children: React.ReactNode; readonly locale: string; readonly messages: Record<string, any> }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppRouterCacheProvider>
        <ModeProvider>
          <InnerProviders>{children}</InnerProviders>
        </ModeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}

function InnerProviders({ children }: { readonly children: React.ReactNode }) {
  const { mode } = useMode();
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
