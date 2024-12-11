import React from 'react';
import { Card, CardContent, Typography, Box, Chip, useTheme, useMediaQuery, CardActionArea } from '@mui/material';

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Vérification si l'écran est mobile

  return (
    <Card
      sx={{
        marginTop: isMobile ? 1 : 2,
        marginBottom: isMobile ? 1 : 2,
        color: theme.palette.primary.main,
        borderRadius: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: theme.palette.background.default,
        boxShadow: `1px 1px 1px rgba(0, 0, 0, 0.2)`,
        '&:hover': {
            transform: 'scale(1.01)',
        },
        opacity: 0.99
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'} // Sur mobile, on empile les éléments verticalement
            justifyContent="space-between"
            alignItems={isMobile ? 'center' : 'flex-start'} // Alignement centré sur mobile
            sx={{ padding: isMobile ? 1 : 2}}
          >
            <Box sx={{ minWidth: isMobile ? '100%' : '150px', textAlign: 'left' }}>
              <Typography variant="body2" color="textSecondary">
                {date}
              </Typography>
              <Box mt={1} display="flex" justifyContent={isMobile ? 'center' : 'left'}>
                <img
                  src={imageUrl}
                  alt="Company Logo"
                  style={{
                    maxWidth: isMobile ? "100px" : "124px", // Réduction de la taille de l'image sur mobile
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1, ml: isMobile ? 0 : 3, mt: isMobile ? 2 : 0 }}>
              <Typography variant={isMobile ? "h6" : "h5"} color="primary" textAlign={isMobile ? 'center' : 'left'}>
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" textAlign={isMobile ? 'center' : 'left'}>
                {company}
              </Typography>
              <Typography variant="body2" mt={1} textAlign={isMobile ? 'center' : 'left'}>
                {description}
              </Typography>

              {/* Tags */}
              <Box mt={2} display="flex" justifyContent={isMobile ? 'center' : 'left'} flexWrap="wrap" gap={1}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    sx={{
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      fontSize: isMobile ? '0.8rem' : '1rem', // Taille de la police réduite sur mobile
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExperienceCard;