"use client";

import NavBar from "@/components/navbar/NavBar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import Experiences from "@/components/experiences/Experiences";
import AboutMe from "@/components/AboutMe";
import PinnedRepositories from "@/components/repositories/PinnedRepositories";
import DecodeAnimation from "react-decode-animation";
import user from "@/data/user.json";

export default function Home() {
  const t = useTranslations("HomePage");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      </Box>
      <Box
      >
        <AboutMe description={t("description")} />
        <Experiences />
        <PinnedRepositories username={user.githubusername} />
      </Box>
    </>
  );
}
