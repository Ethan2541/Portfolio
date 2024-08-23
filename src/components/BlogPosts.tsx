"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Grid, Button } from "@mui/material";

// Définir un type pour les articles de blog
interface BlogPost {
  title: string;
  date: string;
  description: string;
  link: string;
}

// Définir un type pour les props du composant BlogPosts
interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  {post.description}
                </Typography>
                <Button variant="outlined" href={post.link}>
                  Lire plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default  BlogPosts;
