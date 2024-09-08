import React from "react";
import Experience from "./Experience";
import { Box, Typography, useTheme, Divider, Grid } from "@mui/material";
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
        padding: theme.spacing(6),
      }}
      id="experiences"
    >
      {/* Header section */}
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: theme.spacing(4),
          textTransform: "uppercase",
          letterSpacing: "0.15rem",
        }}
      >
        {t("experience")}
      </Typography>

      {/* See More button */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: theme.spacing(4) }}>
        <SeeMoreButton hrefstring="/experiences" />
      </Box>

      {/* Experiences list */}
      {experiences.length > 0 ? (
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} key={experience.title + experience.company + experience.date}>
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
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            marginTop: theme.spacing(6),
          }}
        >
          {t("no_experiences")}
        </Typography>
      )}
    </Box>
  );
};

export default Experiences;
