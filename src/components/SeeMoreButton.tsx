import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface SeeMoreButtonProps {
  hrefstring: string;
}

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    "& .arrow-icon": {
      transform: "translateX(20%)",
    },
  },
  "& .arrow-icon": {
    transition: "transform 0.3s ease",
    transform: "translateX(0)",
    marginLeft: theme.spacing(1),
  },
}));

export default function SeeMoreButton(props: Readonly<SeeMoreButtonProps>) {
  const t = useTranslations("HomePage");

  return (
    <div>
      <AnimatedButton href={props.hrefstring} variant="text" color="primary">
        {t("seemore")}
        <ArrowForwardIcon className="arrow-icon" />
      </AnimatedButton>
    </div>
  );
}
