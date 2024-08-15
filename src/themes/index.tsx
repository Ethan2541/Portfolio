// src/themes/index.ts
'use client';

import { PaletteMode, createTheme } from '@mui/material';
import { blue, indigo, red, green } from '@mui/material/colors';

// Fonction pour obtenir les tokens de design en fonction du mode
function getDesignTokens(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: "#86e5fa",
            },
            secondary: {
              main: "#fa9c86",
            },
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
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

// Exportation de la fonction pour créer le thème
export default getDesignTokens;
