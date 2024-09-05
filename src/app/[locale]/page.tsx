"use client";

import NavBar from "@/components/navbar/NavBar";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Experiences from "@/components/experiences/Experiences";
import AboutMe from "@/components/AboutMe";
import PinnedRepositories from "@/components/repositories/PinnedRepositories";
import DecodeAnimation from "react-decode-animation";
import user from "@/data/user.json";

export default function Home() {
  const t = useTranslations("HomePage");
  const theme = useTheme();

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
        }}
      >
        <Typography
          variant="h1"
          color={theme.palette.primary.main}
          textAlign={"center"}
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
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <AboutMe description={t("description")} />
        <Experiences />
        <PinnedRepositories username={user.githubusername} />

      </Box>
    </>
  );
}
