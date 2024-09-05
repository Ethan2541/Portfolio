"use client";

import NavBar from "@/components/navbar/NavBar";
import UserRepositories from "@/components/repositories/UserRepositories";
import user from "@/data/user.json";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Projects() {
  const t = useTranslations("Category");
  useEffect(() => {
    document.title = user.name + " | " + t("projects");
  }, []);

  return (
    <div>
      <NavBar alwaysShowTopNav={true}/>
      <UserRepositories username={user.githubusername} />
    </div>
  );
}
