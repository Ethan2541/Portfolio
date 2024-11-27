import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MenuDrawer from "./MenuDrawer";


interface TopNavBarProps {
  githubusername: string;
  linkedinusername: string;
  progress: number;
}

export default function TopNavBar({ githubusername, linkedinusername, progress }: Readonly<TopNavBarProps>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            aria-label="Menu"
            onClick={toggleDrawer(true)}
            sx={{ position: "fixed", top: 16, left: 16, zIndex: 1200 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuDrawer
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            githubusername={githubusername}
            linkedinusername={linkedinusername}
          />
        </>
      ) : (
        <DesktopNavBar
          githubusername={githubusername}
          linkedinusername={linkedinusername}
          progress={progress}
        />
      )}
    </>
  );
}
