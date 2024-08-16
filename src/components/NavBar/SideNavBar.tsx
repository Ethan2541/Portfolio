import IconButton from "@mui/material/IconButton";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button } from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import { useMode } from "@/contexts/ModeProvider";

interface SideNavBarProps {
  githubusername: string;
  linkedinusername: string;
}

export default function SideNavBar({
  githubusername,
  linkedinusername,
}: Readonly<SideNavBarProps>) {
  const { mode, setMode, toggleMode } = useMode();
  return (
    <div className="side-navbar">
      <ul className="side-navbar-home">
        <li>
          <Button variant="text">Projects</Button>
        </li>
        <li>
          <Button variant="text">Experiences</Button>
        </li>
        <li>
          <Button
            variant="text"
            component="a"
            href="/assets/resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </li>
      </ul>
      <ul className="side-navbar-network">
        <li>
          <IconButton
            aria-label="GitHub"
            className="iconButton-side-navbar"
            component="a"
            href={`https://github.com/${githubusername}`}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            aria-label="LinkedIn"
            className="iconButton-side-navbar"
            component="a"
            href={`https://linkedin.com/in/${linkedinusername}`}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </li>
        <li>
          <IconButton
            aria-label="Books"
            className="iconButton-side-navbar"
            component="a"
            href="#books"
          >
            <BookIcon />
          </IconButton>
        </li>
      </ul>
      <ul className="side-navbar-theme">
        <li>
          <IconButton
            className="iconButton-side-navbar"
            aria-label="LightMode"
            component="a"
            onClick={() => toggleMode(mode)}
          >
            <LightModeIcon />
          </IconButton>
        </li>

        <li>
          <LanguageSelector />
        </li>
      </ul>
    </div>
  );
}
