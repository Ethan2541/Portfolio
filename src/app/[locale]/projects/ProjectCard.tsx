'use client'

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
    return (
        <Card>
            <CardActionArea onClick={() => console.log("Clicked")}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images-ext-1.discordapp.net/external/BNqUuLw96r-b5Tx_yZDpgYLBqyEvnUqyB-p-dXIIJFk/%3Fs%3D2048x2048%26w%3Dis%26k%3D20%26c%3DIZozzn0SJ4VXLDRRoFZnXLMjOLxzbvL96cqemJYyiSg%3D/https/media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?format=webp&width=547&height=475"
                    title="Buddha"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign={"center"}>
                    Buddha
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nec odio vitae justo.
                    Nulla facilisi.
                    Nullam nec purus.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}