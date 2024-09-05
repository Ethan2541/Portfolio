"use client";

import NavBar from "@/components/navbar/NavBar";
import BlogPosts from "../../../components/BlogPosts";
import user from "@/data/user.json";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const posts = [
  {
    title: "Introduction à Next.js",
    date: "1er Août 2024",
    description: "Découvrez les bases de Next.js et comment il peut améliorer vos projets React.",
    link: "/posts/introduction-a-nextjs",
  },
  {
    title: "Les meilleures pratiques avec Material-UI",
    date: "15 Juillet 2024",
    description: "Apprenez à utiliser Material-UI pour créer des interfaces utilisateur modernes et réactives.",
    link: "/posts/meilleures-pratiques-material-ui",
  },
];

export default function Blog() {
  const t = useTranslations("Category");
  useEffect(() => {
    document.title = user.name + " | " + t("Blog");
  }, []);
  return (
    <div>
      <NavBar alwaysShowTopNav={true} />
      <BlogPosts posts={posts} />
    </div>
  );

}
