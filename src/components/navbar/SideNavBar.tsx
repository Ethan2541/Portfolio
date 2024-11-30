import IconButton from "@mui/material/IconButton";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, Box } from "@mui/material";
import LanguageSelector from "../LanguageSelector";
import { useMode } from "@/contexts/ModeProvider";
import { useTranslations } from "next-intl";

interface SideNavBarProps {
  githubusername: string;
  linkedinusername: string;
}

export default function SideNavBar({
  githubusername,
  linkedinusername,
}: Readonly<SideNavBarProps>) {
  const { mode, toggleMode } = useMode();
  const t = useTranslations("Navbar");

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
          {/* <Box
            component="video"
            autoPlay
            muted
            loop
            sx={{
              height: '100%',
              width: '100%',
              left: 0,
              zIndex: -1,
              objectFit: 'cover',
              transform: 'rotate(180deg)',
              opacity: 0.6,
              filter: 'blur(3px)',
            }}
          >
            <source src="assets/blackhole.webm" type="video/webm" />
          </Box> */}
      {/* Navigation for projects, experiences, resume */}
      <Box
        component="ul"
        sx={{
          position: 'absolute',
          left: '30px',
          top: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <Box component="li" sx={{ margin: '10px 0' }}>
          <Button variant="text" component="a" href="#project">
            {t("projects")}
          </Button>
        </Box>
        <Box component="li" sx={{ margin: '10px 0' }}>
          <Button variant="text" component="a" href="#experiences">
            {t("experience")}
          </Button>
        </Box>
        <Box component="li" sx={{ margin: '10px 0' }}>
          <Button
            variant="text"
            component="a"
            href="/assets/resume.pdf"
            target="_blank"
          >
            {t("resume")}
          </Button>
        </Box>
      </Box>

      {/* Social Media Buttons */}
      <Box
        component="ul"
        sx={{
          position: 'absolute',
          right: '30px',
          top: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <Box component="li">
          <IconButton
            aria-label="GitHub"
            component="a"
            href={`https://github.com/${githubusername}`}
            target="_blank"
            sx={{ boxShadow: 2 }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
        <Box component="li">
          <IconButton
            aria-label="LinkedIn"
            component="a"
            href={`https://linkedin.com/in/${linkedinusername}`}
            target="_blank"
            sx={{ boxShadow: 2 }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box component="li">
          <IconButton
            aria-label="Blog"
            component="a"
            href="/blog"
            sx={{ boxShadow: 2 }}
          >
            <BookIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Theme Toggle and Language Selector */}
      <Box
        component="ul"
        sx={{
          position: 'absolute',
          right: '30px',
          bottom: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <Box component="li">
          <IconButton
            aria-label="LightMode"
            onClick={() => toggleMode(mode)}
            sx={{ boxShadow: 2 }}
          >
            <LightModeIcon />
          </IconButton>
        </Box>
        <Box component="li">
          <LanguageSelector />
        </Box>
      </Box>
    </Box>
  );
}
