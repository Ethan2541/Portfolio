import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";

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
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        padding: theme.spacing(4),
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
};

export default AboutMe;
