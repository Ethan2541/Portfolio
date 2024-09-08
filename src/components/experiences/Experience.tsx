import React from 'react';
import { Card, CardContent, Typography, Box, Chip, useTheme } from '@mui/material';

interface ExperienceCardProps {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  imageUrl?: string; // Ajout d'une prop optionnelle pour l'image
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  date,
  title,
  company,
  description,
  tags,
  imageUrl = "https://www.excalibra.com/wp-content/uploads/2019/05/logo_EX_CALIBRA_544_180.png" 
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ margin: 2, padding: 2, color: '#ffffff', backgroundColor: theme.palette.background.default }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box sx={{ minWidth: '150px', textAlign: 'left' }}>
            <Typography variant="body2" color="textSecondary">
              {date}
            </Typography>
            <Box mt={1}> 
              <img
                src={imageUrl}
                alt="Company Logo"
                style={{ maxWidth: "124px", height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, ml: 3 }}>
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {company}
            </Typography>
            <Typography variant="body2" mt={1}>
              {description}
            </Typography>

            {/* Tags */}
            <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
              {tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff' }} />
              ))}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
