"use client";

import UserRepositories from "@/components/UserRepositories";
import user from "@/data/user.json";

export default function Projects() {
  return <UserRepositories username={user.githubusername} />;
}
