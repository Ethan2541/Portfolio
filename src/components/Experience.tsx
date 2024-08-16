import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

// Définir le type pour les props
interface ExperienceProps {
  title: string;
  company: string;
  description: string;
  date: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, company, description, date }) => {
  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary">
          {company}
        </Typography>
        <Typography variant="body2" mt={1}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Experience;
