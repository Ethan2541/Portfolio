"use client";

import NavBar from "@/components/navbar/NavBar";
import UserRepositories from "@/components/repositories/UserRepositories";
import user from "@/data/user.json";
import { Box, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Projects() {
  const t = useTranslations("Category");
  useEffect(() => {
    document.title = user.name + " | " + t("projects");
  }, []);
  const theme = useTheme();

  return (
    <>
      <NavBar alwaysShowTopNav={true} />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          paddingTop: theme.spacing(8),
          minHeight: "100vh",
        }}
      >
        <UserRepositories username={user.githubusername} />
      </Box>
    </>
  );
}
