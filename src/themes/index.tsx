// src/themes/index.ts
'use client';

import { PaletteMode, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeBackground {
    alternative: string;
  }
}

function getDesignTokens(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: "#000000",
            },
            secondary: {
              main: "#348fab",
            },
            background: {
              default: "#ffffff",
              paper: "#ededed",
              alternative: "#cbd4d5",
            },
          }
        : {
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#ffffff",
            },
            background: {
              default: "#121212",
              paper: "#2b2b2b",
              alternative: "#2b373d",
            },
          }),
    },
  });
}

export default getDesignTokens;
