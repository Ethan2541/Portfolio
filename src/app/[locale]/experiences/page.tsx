"use client";

import React, { useEffect } from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import user from "@/data/user.json";
import { useTranslations } from "next-intl";
import NavBar from "@/components/navbar/NavBar";

// Exemple de données d'expériences
const experiences = [
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

export default function Experience() {
  const t = useTranslations("Category");
  useEffect(() => {
    document.title = user.name + " | " + t("experiences");
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <NavBar alwaysShowTopNav={true} />

      <Typography variant="h4" component="h1" gutterBottom>
        Mes Expériences Professionnelles
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {experience.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {experience.company}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {experience.duration}
                </Typography>
                <Typography variant="body2">
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
