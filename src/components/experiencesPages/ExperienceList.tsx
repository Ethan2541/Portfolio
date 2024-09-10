import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ExperienceItem from "./ExperienceItem";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      alignItems={isMobile ? "stretch" : "center"}
      spacing={isMobile ? 3 : 6}  // Less spacing on mobile
    >
      {experiences.map((experience) => (
        <Grid item xs={12} key={experience.title}>
          <ExperienceItem experience={experience} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceList;
