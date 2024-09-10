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
  Avatar,
  useMediaQuery,
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

  // Check if screen size is mobile
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ width: '100%', p: isMobile ? 0.5 : 2 }}>
      <List>
        {repos.map((repo) => (
          <React.Fragment key={repo.id}>
            <ListItemButton
              onClick={() => window.open(repo.html_url, '_blank')}
              sx={{
                borderRadius: 1,
                mb: isMobile ? 1 : 2, // Reduced margin bottom for mobile
                p: isMobile ? 1 : 2, // Reduced padding for mobile
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="GitHub"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  sx={{ width: isMobile ? 24 : 40, height: isMobile ? 24 : 40 }} // Smaller avatar for mobile
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 'bold',color: theme.palette.primary.main, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    {repo.name}
                  </Typography>
                }
                secondary={
                  <Box sx={{ mt: 0.5 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                      {repo.description || 'No description available.'}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                        <StarIcon sx={{ color: theme.palette.warning.main, fontSize: isMobile ? 16 : 20, mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                          {repo.stargazers_count}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ForkRightIcon sx={{ color: theme.palette.info.main, fontSize: isMobile ? 16 : 20, mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                          {repo.forks_count}
                        </Typography>
                      </Box>
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
