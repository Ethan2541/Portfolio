"use client";

import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import user from "@/data/user.json";
import { useTranslations } from "next-intl";
import NavBar from "@/components/navbar/NavBar";
import ExperienceList from "../../../components/experiencesPages/ExperienceList";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Développeur Front-end",
    company: "Tech Solutions",
    duration: "Janvier 2021 - Présent",
    description:
      "Développement d'applications web réactives en utilisant React et Material-UI. Collaboration avec des équipes de backend pour intégrer des API RESTful.",
  },
  {
    title: "Ingénieur Logiciel",
    company: "Innovative Apps",
    duration: "Mars 2019 - Décembre 2020",
    description:
      "Conception et développement de systèmes distribués. Amélioration des performances des applications et refactorisation du code pour une meilleure maintenabilité.",
  },
];

const Experience: React.FC = () => {
  const theme = useTheme();
  const t = useTranslations("Category");

  useEffect(() => {
    document.title = user.name + " | " + t("experiences");
  }, [t]);

  return (
    <>
      <NavBar alwaysShowTopNav={true} />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: theme.spacing(8),
          position: "relative",
        }}
      >
        <ExperienceList experiences={experiences} />
      </Box>
    </>
  );
};

export default Experience;
