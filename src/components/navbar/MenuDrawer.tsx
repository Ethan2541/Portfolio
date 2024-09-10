import { Drawer, IconButton, Box, Stack, Button, useTheme, ListItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import LightModeIcon from "@mui/icons-material/LightMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useMode } from "@/contexts/ModeProvider";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector";

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
        },
      }}
    >
      <Box
        sx={{
          width: 240,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(2),
          boxSizing: "border-box",
        }}
      >
        {/* Main Navigation Section */}
        <Stack direction="column" spacing={2} component="ul" sx={{ listStyle: "none", margin: 0, padding: 0 }}>
          <Link href="/" passHref legacyBehavior>
            <IconButton aria-label="Home" component="a" onClick={onClose}>
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link href="/#project" passHref legacyBehavior>
            <Button
              variant="text"
              startIcon={<WorkIcon />}
              component="a"
              sx={{ color: "white", textTransform: "none" }}
              onClick={onClose}
            >
              {t("projects")}
            </Button>
          </Link>
          <Link href="/#experiences" passHref legacyBehavior>
            <Button
              variant="text"
              startIcon={<DescriptionIcon />}
              component="a"
              sx={{ color: "white", textTransform: "none" }}
              onClick={onClose}
            >
              {t("experience")}
            </Button>
          </Link>
          <Link href="/assets/resume.pdf" passHref legacyBehavior>
            <Button
              variant="text"
              startIcon={<DescriptionIcon />}
              component="a"
              target="_blank"
              sx={{ color: "white", textTransform: "none" }}
              onClick={onClose}
            >
              {t("resume")}
            </Button>
          </Link>
          <Link href="/blog" passHref legacyBehavior>
            <IconButton aria-label="Blog" component="a" onClick={onClose}>
              <BookIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Stack>

        {/* Social Media Section */}
        <Stack
          direction="column"
          spacing={2}
          component="ul"
          sx={{ listStyle: "none", margin: 0, padding: 0, marginTop: "auto" }}
        >
          <Link href={`https://github.com/${githubusername}`} passHref>
            <IconButton aria-label="GitHub" component="a" target="_blank" onClick={onClose}>
              <GitHubIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link href={`https://linkedin.com/in/${linkedinusername}`} passHref>
            <IconButton aria-label="LinkedIn" component="a" target="_blank" onClick={onClose}>
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Stack>

        {/* Settings Section */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: theme.spacing(2) }}>
          <IconButton aria-label="Toggle Mode" onClick={() => { toggleMode(mode); onClose(); }}>
            <LightModeIcon sx={{ color: "white" }} />
          </IconButton>
          <LanguageSelector />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
