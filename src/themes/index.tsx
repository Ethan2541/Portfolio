'use client'

import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { blue, indigo, red, green } from '@mui/material/colors';

function getDesignTokens(mode: PaletteMode) {
    return ({
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
            }
            : {
                primary: {
                    main: "#ffffff",
                },
                secondary: {
                    main: "#fa9c86",
                },
            }),
        }
    });
};


const theme = createTheme(getDesignTokens('light'));
export default theme;