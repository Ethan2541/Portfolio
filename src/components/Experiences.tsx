import React from 'react';
import Experience from './Experience';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';

// Définir le type pour une expérience individuelle
interface ExperienceType {
  title: string;
  company: string;
  description: string;
  date: string;
  tags: string[];
}

// Définir les props pour le composant Experiences
interface ExperiencesProps {
  experiences: ExperienceType[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const t = useTranslations("HomePage");
  const theme = useTheme();

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
      <Button href="/experiences">voir plus</Button>
      {experiences.map((experience, index) => (
        <Experience
          key={index} // Idéalement, utiliser un ID unique
          title={experience.title}
          company={experience.company}
          description={experience.description}
          date={experience.date}
          tags={experience.tags}
        />
      ))}
    </Box>
  );
};

export default Experiences;
