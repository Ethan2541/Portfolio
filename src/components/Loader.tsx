import { CircularProgress, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

export default function Loader() {
  return (
    <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100vh", backgroundColor: "#121212", color: "#ffffff" }}
    >
        <CircularProgress thickness={4} size="10vh" color="inherit" />
    </Stack>
  );
}