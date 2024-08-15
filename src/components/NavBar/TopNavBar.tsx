import IconButton from "@mui/material/IconButton";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from "@mui/material";
import LanguageSelector from './LanguageSelector';

interface TopNavBar {
  githubusername: string;
  linkedinusername: string;
  progress: number;
}

export default function TopNavBar({ githubusername, linkedinusername, progress }: Readonly<TopNavBar>) {

  return (
    <div>
      <div className="top-navbar">
        <ul>
          <li>
            <IconButton aria-label="Home" component="a" href="#">
              <HomeIcon />
            </IconButton>
          </li>
          <li>
            <Button variant="text">Projects</Button>
          </li>
          <li>
            <Button variant="text">Experiences</Button>
          </li>
          <li>
            <Button variant="text" component="a" href="/assets/resume.pdf" target="_blank">
              Resume
            </Button>
          </li>
          <li>
            <IconButton aria-label="Books" component="a" href="#books">
              <BookIcon />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="GitHub" component="a" href={`https://github.com/${githubusername}`} target="_blank">
              <GitHubIcon />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="LinkedIn" component="a" href={`https://linkedin.com/in/${linkedinusername}`} target="_blank">
              <LinkedInIcon />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="LightMode" component="a" target="_blank">
              <LightModeIcon />
            </IconButton>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </div>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
