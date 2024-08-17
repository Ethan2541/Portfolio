import React, { useEffect, useState } from "react";
import { Typography, Grid, Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';
import ProjectCard from "./ProjectCard";

interface PinnedRepo {
  name: string;
  description: string;
  forkCount: number;
  stargazerCount: number;
}

const PinnedRepositories: React.FC<{ username: string }> = ({ username }) => {
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const t = useTranslations("HomePage");

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      const query = `
        {
          user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazerCount
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // Remplacez par votre token
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { data } = await response.json();
        const repos = data.user.pinnedItems.nodes.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          forkCount: repo.forkCount,
          stargazerCount: repo.stargazerCount,
        }));
        setPinnedRepos(repos);
      } catch (error) {
        console.error("Error fetching pinned repositories:", error);
        setError("Failed to load repositories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPinnedRepos();
  }, [username]);


  if (loading) {
    return <Typography variant="h6" marginTop={5}>Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error" marginTop={5}>{error}</Typography>;
  }

  return (
    <Container>
      <Typography
        variant="h3"
        color={theme.palette.primary.main}
        marginBottom={5}
        marginTop={5}
      >
        {t("projects")}
      </Typography>
      <Grid container spacing={3}>
        {pinnedRepos.map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={repo.name}>
            <ProjectCard user={username} name={repo.name} description={repo.description} stargazerCount={repo.stargazerCount} forkCount={repo.forkCount} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PinnedRepositories;
