import React, { useEffect, useState } from 'react';
import {
  List,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Box,
  useTheme,
  ListItemButton,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { Star as StarIcon, ForkRight as ForkRightIcon } from '@mui/icons-material';

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
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 2 }}>
      <List>
        {repos.map((repo) => (
          <React.Fragment key={repo.id}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                mb: 2,
                transition: 'transform 0.2s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent>
                <ListItemButton
                  onClick={() => window.open(repo.html_url, '_blank')}
                  sx={{
                    borderRadius: 2,
                    padding: theme.spacing(2),
                  }}
                >
                  <ListItemIcon>
                    <Avatar
                      alt="GitHub"
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      sx={{ width: 56, height: 56 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {repo.name}
                      </Typography>
                    }
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {repo.description || 'No description available.'}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
                            <StarIcon sx={{ color: theme.palette.warning.main, mr: 0.5 }} />
                            <Typography variant="body2" color="text.secondary">
                              {repo.stargazers_count}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ForkRightIcon sx={{ color: theme.palette.info.main, mr: 0.5 }} />
                            <Typography variant="body2" color="text.secondary">
                              {repo.forks_count}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    }
                  />
                </ListItemButton>
              </CardContent>
            </Card>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default UserRepositories;
