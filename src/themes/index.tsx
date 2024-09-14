// src/themes/index.ts
'use client';

import { PaletteMode, createTheme } from '@mui/material';

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
              main: "#fa9c86",
            },
            background: {
              default: "#ffffff",
              paper: "#f3f4f6",
            },
          }
        : {
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#fa9c86",
            },
            background: {
              default: "#121212",
              paper: "#424242",
            },
          }),
    },
  });
}

export default getDesignTokens;
