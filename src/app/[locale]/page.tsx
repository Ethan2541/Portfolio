"use client";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Experiences from "@/components/Experiences";
import AboutMe from "@/components/AboutMe";
import PinnedRepositories from "@/components/PinnedRepositories";

export default function Home() {
  const t = useTranslations("HomePage");
  const theme = useTheme();
  const experiencesData = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      description:
        "Developed a full-stack application using React and Node.js.",
      date: "Jan 2020 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions",
      description:
        "Worked on enhancing UI/UX of the main product using Material-UI and React.",
      date: "Jun 2018 - Dec 2019",
    },
    // Ajoute plus d'expériences ici
  ];

  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Typography variant="h1" color={theme.palette.primary.main} textAlign={"center"}>
          {t("title")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          paddingY: 10,
        }}
      >
        <AboutMe description="I'm a passionate full-stack developer with experience in building web applications using modern technologies. I love to learn and contribute to exciting projects." />
        <Experiences experiences={experiencesData} />

        <PinnedRepositories username="Ethan2541" />
      </Box>
    
    </>
  );
}
