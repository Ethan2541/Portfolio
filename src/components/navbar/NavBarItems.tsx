import { Stack, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NavBarItems = () => {
  const t = useTranslations("Navbar");

  return (
    <Stack direction="row" spacing={2} component="ul" sx={{ listStyle: "none", margin: 0, padding: 0 }}>
      <Link href="/" passHref legacyBehavior>
        <IconButton aria-label="Home" component="a">
          <HomeIcon sx={{ color: "white" }} />
        </IconButton>
      </Link>
      <Link href="/#project" passHref legacyBehavior>
        <Button variant="text" component="a" sx={{ color: "white", textTransform: "none" }}>
          {t("projects")}
        </Button>
      </Link>
      <Link href="/#experiences" passHref legacyBehavior>
        <Button variant="text" component="a" sx={{ color: "white", textTransform: "none" }}>
          {t("experience")}
        </Button>
      </Link>
      <Link href="/assets/resume.pdf" passHref legacyBehavior>
        <Button variant="text" component="a" target="_blank" sx={{ color: "white", textTransform: "none" }}>
          {t("resume")}
        </Button>
      </Link>
      <Link href="/blog" passHref legacyBehavior>
        <IconButton aria-label="Blog" component="a">
          <BookIcon sx={{ color: "white" }} />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default NavBarItems;
