"use client";

import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import user from "@/data/user.json";
import { useTranslations } from "next-intl";
import NavBar from "@/components/navbar/NavBar";
import ExperienceList from "../../../components/experiencesPages/ExperienceList";

interface ExperienceType {
  title: string;
  company: string;
  description: string;
  date: string;
  tags: string[];
}


const Experience: React.FC = () => {
  const theme = useTheme();
  const t = useTranslations("Category");
  const t_experience = useTranslations("Experiences");
  const rawExperiencesData = t_experience.raw("experiencesData");

  let experiences: ExperienceType[] = [];

  if (Array.isArray(rawExperiencesData)) {
    experiences = rawExperiencesData as ExperienceType[];
  } else {
    console.error(
      "Unexpected data format for experiencesData:",
      rawExperiencesData
    );
  }

  useEffect(() => {
    document.title = user.name + " | " + t("experiences");
  }, [t]);

  return (
    <>
      <NavBar alwaysShowTopNav={true} />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          minHeight: "100vh",
          zIndex: -1,
        }}
      >
        <ExperienceList experiences={experiences} />
      </Box>
    </>
  );
};

export default Experience;
