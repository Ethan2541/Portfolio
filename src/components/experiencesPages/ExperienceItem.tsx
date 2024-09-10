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
        width: "100%",
        maxWidth: "800px",
        position: "relative",
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2), // Added margin bottom for spacing between items
        boxSizing: "border-box",
      }}
    >
      {/* Colonne pour les dates */}
      <Box
        sx={{
          flex: isMobile ? "none" : "1 1 20%", // Adjust flex on mobile
          textAlign: isMobile ? "center" : "left",
          padding: theme.spacing(1),
          marginBottom: isMobile ? theme.spacing(1) : 0, // Margin bottom on mobile
        }}
      >
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {experience.duration}
        </Typography>
      </Box>

      {/* Barre de séparation */}
      {!isMobile && (
        <Box
          sx={{
            flex: "0 1 2px",
            display: "flex",
            alignItems: "stretch",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.palette.background.paper,
            }}
          />
        </Box>
      )}

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
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
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
