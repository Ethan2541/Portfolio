"use client";

import NavBar from "@/components/navbar/NavBar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import Experiences from "@/components/experiences/Experiences";
import AboutMe from "@/components/AboutMe";
import PinnedRepositories from "@/components/repositories/PinnedRepositories";
import DecodeAnimation from "react-decode-animation";
import user from "@/data/user.json";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const t = useTranslations("HomePage");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          position: "fixed", // Change to fixed to keep it in place during scroll
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
          objectFit: "cover",
          transform: "rotate(180deg)",
          opacity: theme.palette.mode === "dark" ? 0.6 : 0.07,
          filter: "blur(3px)",
        }}
      >
        <source src="assets/blackhole.webm" type="video/webm" />
      </Box>
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
        <Box
          sx={{
            position: "relative",
            width: "80%", // Set width to 100% to center the content
            height: "70vh", // Set a specific height for the Laptop3D container
            overflow: "hidden", // Prevent overflow if the content exceeds the container
            zIndex: 0, // Ensure it stays above other elements
            display: "flex",
            flexDirection: "row",
            left: "50%",
            transform: "translateX(-50%)",
            alignItems: "center",
            justifyContent: "center", // Center the content horizontally
            "@media (max-width: 1250px)": {
              height: "60vh", // Adjust height for tablets
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
                customCharacters="
                ابتثجحخدذرزسشصضطظعغفقكلمنهوي
                あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
                가나다라마바사아자차카타파하
                一二三四五六七八九十百千万"
                interval={150}
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
                customCharacters="
                ابتثجحخدذرزسشصضطظعغفقكلمنهوي
                あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん
                가나다라마바사아자차카타파하
                一二三四五六七八九十百千万"
                interval={150}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Box sx={{ backgroundColor: theme.palette.background.alternative }}>
          <AnimatedSection>
            <AboutMe description={t("description")} />
          </AnimatedSection>
        </Box>
        <AnimatedSection>
          <Experiences />
        </AnimatedSection>
        <AnimatedSection>
          <PinnedRepositories username={user.githubusername} />
        </AnimatedSection>
      </Box>
    </>
  );
}
