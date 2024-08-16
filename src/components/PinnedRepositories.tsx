import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

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
            Authorization: `Bearer TOKEN`, // Remplacez par votre token
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

  const handleCardClick = (repoName: string) => {
    window.open(`https://github.com/${username}/${repoName}`, '_blank');
  };

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography
        variant="h3"
        color={theme.palette.primary.main}
        marginBottom={5}
      >
        {t("projects")}
      </Typography>
      <Grid container spacing={3}>
        {pinnedRepos.map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={repo.name}>
            <Card sx={{ borderRadius: 2, boxShadow: theme.shadows[3] }}>
              <CardActionArea onClick={() => handleCardClick(repo.name)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/${username}/${repo.name}/main/banner.jpg?raw=true`} 
                  alt={repo.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    (e.target as HTMLImageElement).src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'; 
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" textAlign="center">
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    {repo.description || "No description available"}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography variant="body2" color="text.secondary">
                      ⭐ {repo.stargazerCount}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      🍴 {repo.forkCount}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PinnedRepositories;
