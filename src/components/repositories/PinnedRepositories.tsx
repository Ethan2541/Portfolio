import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, CircularProgress, Alert, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import ProjectCard from "../ProjectCard";
import SeeMoreButton from "../SeeMoreButton";

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

  // Detect mobile screen size
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
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

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        padding: theme.spacing(isMobile ? 3 : 6), // Adjust padding for mobile
      }}
      id="project"
    >
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: theme.spacing(4),
          textTransform: "uppercase",
          letterSpacing: "0.15rem",
          fontSize: isMobile ? "1.5rem" : "2rem", // Adjust font size for mobile
        }}
      >
        {t("projects")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: theme.spacing(4),
        }}
      >
        <SeeMoreButton hrefstring="/projects" />
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ marginTop: 5 }}>
          {error}
        </Alert>
      ) : (
        <Grid container spacing={isMobile ? 2 : 4}>
          {pinnedRepos.map((repo) => (
            <Grid item xs={12} sm={6} md={4} key={repo.name}>
              <ProjectCard
                user={username}
                name={repo.name}
                description={repo.description}
                stargazerCount={repo.stargazerCount}
                forkCount={repo.forkCount}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PinnedRepositories;
