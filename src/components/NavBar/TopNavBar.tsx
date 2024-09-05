import IconButton from "@mui/material/IconButton";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, Box, Stack, LinearProgress } from "@mui/material";
import LanguageSelector from "../LanguageSelector";
import { useMode } from "@/contexts/ModeProvider";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface TopNavBar {
  githubusername: string;
  linkedinusername: string;
  progress: number;
}

export default function TopNavBar({
  githubusername,
  linkedinusername,
  progress,
}: Readonly<TopNavBar>) {
  const { mode, toggleMode } = useMode();
  const t = useTranslations("Navbar");

  return (
    <Box
      sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(51, 51, 51, 0.95)",
          padding: "5px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          component="ul"
          sx={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          <Link href="/" passHref legacyBehavior>
            <IconButton aria-label="Home" component="a">
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link href="/#project" passHref legacyBehavior>
            <Button
              variant="text"
              component="a"
              sx={{ color: "white", textTransform: "none" }}
            >
              {t("projects")}
            </Button>
          </Link>
          <Link href="/#experiences" passHref legacyBehavior>
            <Button
              variant="text"
              component="a"
              sx={{ color: "white", textTransform: "none" }}
            >
              {t("experience")}
            </Button>
          </Link>
          <Link href="/assets/resume.pdf" passHref legacyBehavior>
            <Button
              variant="text"
              component="a"
              target="_blank"
              sx={{ color: "white", textTransform: "none" }}
            >
              {t("resume")}
            </Button>
          </Link>
          <Link href="/blog" passHref legacyBehavior>
            <IconButton aria-label="Blog" component="a">
              <BookIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          component="ul"
          sx={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          <Link href={`https://github.com/${githubusername}`} passHref>
            <IconButton aria-label="GitHub" component="a" target="_blank">
              <GitHubIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link href={`https://linkedin.com/in/${linkedinusername}`} passHref>
            <IconButton aria-label="LinkedIn" component="a" target="_blank">
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <IconButton aria-label="LightMode" onClick={() => toggleMode(mode)}>
            <LightModeIcon sx={{ color: "white" }} />
          </IconButton>
          <LanguageSelector />
        </Stack>
      </Box>

      <Box sx={{ width: "100%", position: "fixed", top: "49px", left: 0 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: "1px",
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": { backgroundColor: "#ffffff" },
          }}
        />
      </Box>
    </Box>
  );
}
