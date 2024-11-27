"use client";

import NavBar from "@/components/navbar/NavBar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import Experiences from "@/components/experiences/Experiences";
import AboutMe from "@/components/AboutMe";
import PinnedRepositories from "@/components/repositories/PinnedRepositories";
import DecodeAnimation from "react-decode-animation";
import user from "@/data/user.json";
import Laptop3D from "@/components/Laptop3D";

export default function Home() {
  const t = useTranslations("HomePage");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? theme.spacing(2) : theme.spacing(4), // Adjust padding for mobile
        }}
      >
        {/* Laptop3D Component - Ensure it does not overlap */}
        <Box
          sx={{
            position: 'relative',
            width: '80%',   // Set width to 100% to center the content
            height: '70vh',  // Set a specific height for the Laptop3D container
            overflow: 'hidden', // Prevent overflow if the content exceeds the container
            zIndex: 1,        // Ensure it stays above other elements
            display: 'flex',
            flexDirection: 'row',
            left : '50%',
            transform: 'translateX(-50%)',
            alignItems: 'center',
            justifyContent: 'center', // Center the content horizontally
            '@media (max-width: 1250px)': {
              height: '60vh', // Adjust height for tablets
            }
          }}
        >
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h1"
              color={theme.palette.primary.main}
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: theme.spacing(4),
                textTransform: "uppercase",
                letterSpacing: "0.15rem",
                fontSize: isMobile ? "1.5rem" : "2.5rem", // Adjust font size for mobile
              }}
            >
              <DecodeAnimation
                autoplay
                text={t("title")}
                customCharacters="ΑΒΓΔΕΖΗΘΙΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω"
                interval={100}
              />
            </Typography>
            <Typography
              variant="h1"
              color={theme.palette.primary.main}
              sx={{
                textAlign: "center",
                marginBottom: theme.spacing(4),
                letterSpacing: "0.15rem",
                fontSize: isMobile ? "1rem" : "2rem", // Adjust font size for mobile
              }}
            >
              <DecodeAnimation
                autoplay
                text={t("subtitle")}
                customCharacters="ΑΒΓΔΕΖΗΘΙΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω"
                interval={100}
              />
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ flex: 1, width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Laptop3D />
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <AboutMe description={t("description")} />
        <Experiences />
        <PinnedRepositories username={user.githubusername} />
      </Box>
    </>
  );
}
