import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Column layout on mobile
        alignItems: isMobile ? "stretch" : "center",
        gap: isMobile ? 0 : theme.spacing(4),
        width: "100%",
        maxWidth: isMobile ? "100%" : "1250px",
        position: "relative",
        mb: isMobile ? 1 : 2, // Reduced margin bottom for mobile
        mt: isMobile ? 1 : 2, // Reduced margin bottom for mobile
        p: isMobile ? 1 : 2, // Reduced padding for mobile
        boxSizing: "border-box",
      }}
    >
      {/* Colonne pour les dates */}
      <Box
        sx={{
          flex: isMobile ? "none" : "1 1 20%", // Adjust flex on mobile
          textAlign: isMobile ? "center" : "left",
          padding: theme.spacing(1),
        }}
      >
        <Typography color="text.secondary" sx={{ fontStyle: "italic" }}>
          {experience.duration}
        </Typography>
      </Box>

      {/* Colonne droite pour le contenu de l'expérience */}
      <Box
        sx={{
          flex: isMobile ? "1 1 auto" : "1 1 80%",
          textAlign: "left",
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: isMobile ? '0.875rem' : '1rem' }}>
          {experience.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem', mb: isMobile ? 0 : 2 }}>
          {experience.company}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem', color: theme.palette.primary.main }}>
          {experience.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceItem;
