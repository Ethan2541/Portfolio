import React from "react";
import { Star as StarIcon, ForkRight as ForkRightIcon } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, Typography, useTheme } from "@mui/material";

type ProfileCardProps = {
  username: string;
  profilePicture: string;
  forks: number;
  favorites: number;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ username, profilePicture, forks, favorites }) => {
  const theme = useTheme();

  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "80%", md: "75%" },
          borderRadius: 3,
          boxShadow: "0px 8px 24px rgba(255, 255, 255, 0.2)",
          margin: "1rem auto",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 12px 30px rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt={username}
              src={profilePicture}
              sx={{
                width: { xs: 60, sm: 75, md: 90 },
                height: { xs: 60, sm: 75, md: 90 },
                border: `3px solid ${theme.palette.primary.main}`,
                margin: "0 auto",
              }}
            />
          }
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                alt="GitHub"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                sx={{
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                  marginBottom: "4px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  color: theme.palette.text.primary,
                  textAlign: "center", // Centre le texte
                  wordWrap: "break-word", // Coupe les mots longs si nécessaire
                  overflowWrap: "break-word", // Alternative pour les mots longs
                }}
              >
                {username}
              </Typography>
            </div>
          }
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <StarIcon sx={{ color: theme.palette.warning.main, fontSize: { xs: 20, sm: 22 } }} />
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: theme.palette.text.secondary,
                }}
              >
                {favorites}
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <ForkRightIcon sx={{ color: theme.palette.info.main, fontSize: { xs: 20, sm: 22 } }} />
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: theme.palette.text.secondary,
                }}
              >
                {forks}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default ProfileCard;
