import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, Divider } from '@mui/material';
import { Star as StarIcon, ForkRight as ForkRightIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface PinnedRepo {
    user: string;
    name: string;
    description: string;
    forkCount: number;
    stargazerCount: number;
}

export default function ProjectCard({ user, name, description, stargazerCount, forkCount }: Readonly<PinnedRepo>) {
    const theme = useTheme();

    const handleCardClick = (repoName: string) => {
        window.open(`https://github.com/${user}/${name}`, "_blank");
    };
    
    return (
        <Card
            sx={{
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: `0 6px 12px ${theme.palette.grey[600]}`,
                },
                opacity: 0.9, // Make card slightly transparent
            }}
        >
            <CardActionArea onClick={() => handleCardClick(name)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/${user}/${name}/main/banner.jpg?raw=true`} 
                    alt={name}
                    sx={{ 
                        objectFit: 'cover',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                    }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        (e.target as HTMLImageElement).src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"; 
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign="center">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" overflow={"hidden"} height={80}>
                        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Sed in risus."}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <StarIcon sx={{ mr: 0.5, color: theme.palette.primary.main }} />
                            <Typography variant="body2" color="text.secondary">
                                {stargazerCount}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ForkRightIcon sx={{ ml: 2, mr: 0.5, color: theme.palette.primary.main }} />
                            <Typography variant="body2" color="text.secondary">
                                {forkCount}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
