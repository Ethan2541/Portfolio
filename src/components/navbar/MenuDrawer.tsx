import { Drawer, IconButton, Box, Stack, Button, useTheme, ListItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useMode } from "@/contexts/ModeProvider";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector";
import { backIn } from "framer-motion";
import Background from "three/src/renderers/common/Background.js";

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  githubusername: string;
  linkedinusername: string;
}

const MenuDrawer = ({ open, onClose, githubusername, linkedinusername }: Readonly<MenuDrawerProps>) => {
  const { mode, toggleMode } = useMode();
  const t = useTranslations("Navbar");
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
          width: "80%",
          maxwidth: 300,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(2),
          boxSizing: "border-box",
        }}
      >
        <IconButton
          aria-label="Close Drawer"
          onClick={onClose}
          sx={{ alignSelf: "flex-end", position: "absolute", left: theme.spacing(2) }}
        >
          <CloseIcon sx={{ color: theme.palette.primary.main }} />
        </IconButton>

        {/* Main Navigation Section */}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", margin: "auto" }}>
          <Stack direction="column" spacing={1} component="ul" sx={{ listStyle: "none", margin: 0, padding: 0, marginBottom: theme.spacing(10) }}>
            <Link href="/" passHref legacyBehavior>
              <Button
                variant="text"
                component="a"
                sx={{ color: theme.palette.primary.main, textTransform: "none", fontSize: "1.2rem", textAlign: "left" }}
                onClick={onClose}
              >
                {t("home")}
              </Button>
            </Link>
            <Link href="/#projects" passHref legacyBehavior>
              <Button
                variant="text"
                component="a"
                sx={{ color: theme.palette.primary.main, textTransform: "none", fontSize: "1.2rem" }}
                onClick={onClose}
              >
                {t("projects")}
              </Button>
            </Link>
            <Link href="/#experiences" passHref legacyBehavior>
              <Button
                variant="text"
                component="a"
                sx={{ color: theme.palette.primary.main, textTransform: "none", fontSize: "1.2rem" }}
                onClick={onClose}
              >
                {t("experiences")}
              </Button>
            </Link>
            <Link href="/assets/resume.pdf" passHref legacyBehavior>
              <Button
                variant="text"
                component="a"
                target="_blank"
                sx={{ color: theme.palette.primary.main, textTransform: "none", fontSize: "1.2rem" }}
                onClick={onClose}
              >
                {t("resume")}
              </Button>
            </Link>
            {/* <Link href="/blog" passHref legacyBehavior>
              <IconButton aria-label="Blog" component="a" onClick={onClose}>
                <BookIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Link> */}
          </Stack>

          {/* Social Media Section */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            component="ul"
            sx={{ listStyle: "none", margin: "auto", padding: 0 }}
          >
            <Link href={`https://github.com/${githubusername}`} passHref>
              <IconButton aria-label="GitHub" component="a" target="_blank" onClick={onClose}>
                <GitHubIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Link>
            <Link href={`https://linkedin.com/in/${linkedinusername}`} passHref>
              <IconButton aria-label="LinkedIn" component="a" target="_blank" onClick={onClose}>
                <LinkedInIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Link>
          </Stack>
        </Box>

        

        {/* Settings Section */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          component="ul"
          sx={{ listStyle: "none", width: "100%", padding: 0, margin: 0, position: "absolute", bottom: theme.spacing(2), left: 0 }}
        >
          <IconButton aria-label="Toggle Mode" onClick={() => { toggleMode(mode); onClose(); }}>
            <LightModeIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
          <LanguageSelector />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
