import React from "react";
import Experience from "./Experience";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import SeeMoreButton from "../SeeMoreButton";

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
        padding: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="experiences"
    >
      {/* Header section */}
      <Typography
        variant="h4"
        color={theme.palette.primary.main}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: theme.spacing(3),
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
        }}
      >
        {t("experience")}
      </Typography>

      {/* See More button */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: theme.spacing(3) }}>
        <SeeMoreButton hrefstring="/experiences" />
      </Box>

      {/* Experiences list */}
      {experiences.length > 0 ? (
        <Grid container spacing={2}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={experience.title + experience.company + experience.date}>
              <Experience
                title={experience.title}
                company={experience.company}
                description={experience.description}
                date={experience.date}
                tags={experience.tags}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            marginTop: theme.spacing(3),
          }}
        >
          {t("no_experiences")}
        </Typography>
      )}
    </Box>
  );
};

export default Experiences;
