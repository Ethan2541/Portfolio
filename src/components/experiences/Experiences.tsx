import React from "react";
import Experience from "./Experience";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";

interface ExperienceType {
  title: string;
  company: string;
  description: string;
  date: string;
  tags: string[];
}

const Experiences: React.FC = () => {
  const t = useTranslations("HomePage");
  const theme = useTheme();

  // Fetch the raw data
  const rawExperiencesData = t.raw("experiencesData");

  let experiences: ExperienceType[] = [];

  if (Array.isArray(rawExperiencesData)) {
    experiences = rawExperiencesData as ExperienceType[];
  } else {
    console.error(
      "Unexpected data format for experiencesData:",
      rawExperiencesData
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        padding: theme.spacing(4),
      }}
      id="experiences"
    >
      <Typography variant="h1" color={theme.palette.primary.main}>
        {t("experience")}
      </Typography>
      <Button href="/experiences">{t("seemore")}</Button>
      {experiences.length > 0 ? (
        experiences.map((experience, index) => (
          <Experience
            key={index} // Ideally, use a unique ID if available
            title={experience.title}
            company={experience.company}
            description={experience.description}
            date={experience.date}
            tags={experience.tags}
          />
        ))
      ) : (
        <Typography variant="body1">No experiences available.</Typography>
      )}
    </Box>
  );
};

export default Experiences;