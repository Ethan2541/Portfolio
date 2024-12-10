import React from "react";
import Experience from "./Experience";
import { Box, Typography, useTheme, Grid, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const t_experience = useTranslations("Experiences");
  const rawExperiencesData = t_experience.raw("experiencesData");
  const maxExperiences = 3;

  let experiences: ExperienceType[] = [];

  if (Array.isArray(rawExperiencesData)) {
    experiences = rawExperiencesData.slice(0, maxExperiences) as ExperienceType[];
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? theme.spacing(3) : theme.spacing(12),
        margin: "auto",
        minHeight: "50vh",
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
          fontSize: isMobile ? "1.5rem" : "2rem",
        }}
      >
        {t("experience")}
      </Typography>

      {/* Experiences list */}
      {experiences.length > 0 ? (
        <Grid container sx={{ maxWidth: isMobile ? "100%" : "1250px" }}>
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

      {/* See More button */}
      <Box sx={{ marginTop: theme.spacing(3), width: "100%", display: "flex", flexDirection: "row-reverse", marginRight: isMobile ? 1 : 2.5, maxWidth: isMobile ? "100%" : "1250px" }}>
        <SeeMoreButton hrefstring="/experiences" />
      </Box>
    </Box>
  );
};

export default Experiences;
