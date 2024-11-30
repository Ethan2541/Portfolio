import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import Laptop3D from "./Laptop3D";

interface AboutMeProps {
  description: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("HomePage");

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: isMobile ? theme.spacing(3) : theme.spacing(6),
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
      }}
      id="aboutme"
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
          marginRight: isMobile ? 0 : theme.spacing(4),
          height: "100%", // Adjust height to take full available space
          flexGrow: 1,
          flexBasis: 0,
        }}
      >
        {/* Header Section */}
        <Typography
          variant={isMobile ? "h4" : "h2"} // Adjust title size on mobile
          color={theme.palette.primary.main}
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: theme.spacing(4),
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
          }}
        >
          {t("about")}
        </Typography>

        {/* Description Section */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            maxWidth: isMobile ? "100%" : "800px",
            fontSize: isMobile ? "1rem" : "1.2rem", // Adjust font size for mobile
            lineHeight: "1.6",
            padding: theme.spacing(2),
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "100%" : "auto",
          height: "100%", // Adjust height to take full available space
          flexGrow: 1,
          flexBasis: 0,
        }}
      >
        <Laptop3D />
      </Box>
    </Box>
  );
};

export default AboutMe;
