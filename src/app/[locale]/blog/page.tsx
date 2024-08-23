"use client";

import BlogPosts from "../../../components/BlogPosts";


// Exemple de données d'articles de blog (vous pouvez les remplacer par des données dynamiques)
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
  // Ajoutez plus d'articles ici
];

export default function Blog() {
  return <BlogPosts posts={posts} />;
}
