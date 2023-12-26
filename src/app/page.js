"use client";

import Logo from "@/components/Logo/page";
import theme from "@/components/ThemeRegistry/promptnowTheme";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",          // Added display: flex
        alignItems: "center",     // Center vertically
        justifyContent: "center", // Center horizontally
        backgroundImage: `${theme.palette.background.image2.image} !important`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <Logo />
      </div>
    </div>
  );
};
export default Home;