"use client";
import { useEffect, useState } from "react";
import useDetectScroll from "@smakss/react-scroll-direction";
import "./NavBar.css";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

export default function NavBar() {
  // Use the scroll detection hook
  const { scrollPosition } = useDetectScroll();

  // State to track visibility percentage of SideNavBar
  const [visibility, setVisibility] = useState(0);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Calculate visibility percentage based on scroll position
    const maxScroll = 600; // You can adjust this value for longer transitions
    const percentage = Math.min(scrollPosition.top / maxScroll, 1); // Ensures that percentage doesn't exceed 1
    setVisibility(percentage);

     // Calculate scroll progress
     const documentHeight = document.documentElement.scrollHeight;
     const windowHeight = window.innerHeight;
     const scrollTop = scrollPosition.top;
     const maxScrollPosition = documentHeight - windowHeight;
     const progress = Math.min(scrollTop / maxScrollPosition, 1) * 100;
     setScrollProgress(progress);
  }, [scrollPosition.top]);

  const [githubusername, setGithubusername] = useState("Tinshea");
  const [linkedinusername, setLinkedinusername] = useState("malek-bouzarkouna");

  return (
    <div className="navbar">
      {/* SideNavBar - Fades out as you scroll */}
      <div
        style={{
          opacity: 1 - visibility,
          transform: `translateY(${visibility * -50}px)`, // Moves up as it fades out
          transition: "opacity 0.5s ease, transform 0.5s ease",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
        }}
      >
        <SideNavBar
          githubusername={githubusername}
          linkedinusername={linkedinusername}
        />
      </div>

      <div
        style={{
          opacity: visibility,
          transform: `translateY(${(1 - visibility) * -50}px)`, // Moves in as it fades in
          transition: "opacity 0.5s ease, transform 0.5s ease",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
        }}
      >
        <TopNavBar
          githubusername={githubusername}
          linkedinusername={linkedinusername}
          progress={scrollProgress}
        />
      </div>
    </div>
  );
}
