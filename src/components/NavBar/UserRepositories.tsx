import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
  Box,
  useTheme,
  ListItemButton
} from '@mui/material';
import {
  Star as StarIcon,
  ForkRight as ForkRightIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const UserRepositories: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    // Fetch all public repositories of the user
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        {username}'s Repositories
      </Typography>
      <List>
        {repos.map((repo) => (
          <React.Fragment key={repo.id}>
            <ListItemButton
              onClick={() => window.open(repo.html_url, '_blank')}
              sx={{
                borderRadius: 1,
                mb: 1,
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon>
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  style={{ width: 40, height: 40 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={repo.name}
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {repo.description || "No description available."}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <StarIcon sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {repo.stargazers_count}
                      </Typography>
                      <ForkRightIcon sx={{ ml: 2, mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {repo.forks_count}
                      </Typography>
                    </Box>
                  </Box>
                }
              />
          
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default UserRepositories;
