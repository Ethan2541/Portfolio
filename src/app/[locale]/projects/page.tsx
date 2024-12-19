"use client";

import NavBar from "@/components/navbar/NavBar";
import UserRepositories from "@/components/repositories/UserRepositories";
import user from "@/data/user.json";
import { Box, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Head from "next/head";

export default function Projects() {
  const t = useTranslations("Category");
  useEffect(() => {
    document.title = user.name + " | " + t("projects");
  }, []);
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Ethan Luong | Projects</title>
        <meta name="description" content="Projects by Ethan Luong." />
        <meta name="keywords" content="Ethan Luong, projects, portfolio" />
        <meta property="og:title" content="Ethan Luong | Projects" />
        <meta property="og:description" content="Projects by Ethan Luong." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com/projects" />
        <meta property="og:image" content="https://your-portfolio-url.com/og-image.jpg" />
      </Head>
      <NavBar alwaysShowTopNav={true} />
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}>
        <UserRepositories username={user.githubusername} />
      </Box>
    </>
  );
}
