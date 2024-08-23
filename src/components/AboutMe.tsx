import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';

// Définir le type pour les props du composant AboutMe
interface AboutMeProps {
  description: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ description }) => {
  const theme = useTheme();
  const t = useTranslations("HomePage");
  
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
      }}
       id="aboutme"
    >
      <Typography variant="h1" color={theme.palette.primary.main}>
        {t("about")}
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {description}
      </Typography>
    </Box>
  );
}

export default AboutMe;
