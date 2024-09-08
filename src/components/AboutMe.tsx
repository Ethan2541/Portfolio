import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";

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
        padding: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="aboutme"
    >
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: theme.spacing(4),
          textTransform: "uppercase",
          letterSpacing: "0.15rem",
        }}
      >
        {t("about")}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          maxWidth: "800px",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          padding: theme.spacing(2),
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AboutMe;
