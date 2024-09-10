import { Box, LinearProgress } from "@mui/material";
import { useTranslations } from "next-intl";
import NavBarItems from "./NavBarItems";
import SocialLinks from "./SocialLinks";

interface DesktopNavBarProps {
  githubusername: string;
  linkedinusername: string;
  progress: number;
}

const DesktopNavBar = ({ githubusername, linkedinusername, progress }: Readonly<DesktopNavBarProps>) => {
  const t = useTranslations("Navbar");

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(51, 51, 51, 0.95)",
          padding: "5px",
        }}
      >
        <NavBarItems />
        <SocialLinks githubusername={githubusername} linkedinusername={linkedinusername} />
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
};

export default DesktopNavBar;
