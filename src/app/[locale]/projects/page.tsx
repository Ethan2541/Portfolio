'use client'

import { useTranslations } from "next-intl";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import ProjectCard from "./ProjectCard";


export default function Projects() {
  const t = useTranslations("ProjectsPage");
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h3" color={theme.palette.primary.main}>
        {t("title")}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
        <Grid item xs={4}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Container>
  );
}
