'use client'
import NavBar from '@/components/NavBar/NavBar';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import {useTranslations} from 'next-intl';
import ProjectCard from './projects/ProjectCard';

export default function Home() {
  const t = useTranslations('HomePage');
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}>
       <Typography variant="h1" color={theme.palette.primary.main}>{t('title')}</Typography>
      </Box>
      <Box sx={{
        backgroundColor: theme.palette.background.paper,
        paddingY: 10
      }}>
        <Container>
          <Typography variant="h3" color={theme.palette.primary.main} marginBottom={5}>
            {t('projects')}
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
      </Box>
    </>
    
  );
}