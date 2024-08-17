import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Container, Box, Divider } from '@mui/material';
import { Star as StarIcon, ForkRight as ForkRightIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface PinnedRepo {
    user: string;
    name: string;
    description: string;
    forkCount: number;
    stargazerCount: number;
}

export default function ProjectCard({ user, name, description, stargazerCount, forkCount }: PinnedRepo) {
    const theme = useTheme();

    const handleCardClick = (repoName: string) => {
        window.open(`https://github.com/${user}/${name}`, "_blank");
    };
    
    return (
        <Card sx={{ }}>
            <CardActionArea onClick={() => handleCardClick(name)}>
            <CardMedia
                component="img"
                height="140"
                image={`https://raw.githubusercontent.com/${user}/${name}/main/banner.jpg?raw=true`} 
                alt={name}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"; 
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" textAlign="center">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" overflow={"scroll"} height={80}>
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