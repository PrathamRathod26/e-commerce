import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import HeroSection from "../components/HomeComponent/HeroSection";
import Section1 from "../components/HomeComponent/Section1";
import Section2 from "../components/HomeComponent/Section2";
import EmailUpdate from "../components/GeneralComponent/EmailUpdate";
import ImageSlider from "../components/GeneralComponent/ImageSlider";

const Home = () => {
  const [offset1, setOffset1] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setOffset1(y / 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: `-${offset1}px`,
          left: 0,
          width: "100%",
          height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" },
          bgcolor: "lightblue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <HeroSection />
      </Box>

      <Box
        sx={{ height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" } }}
      ></Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          willChange: "transform",
          bgcolor: "background.default",
          py: 4,
        }}
      >
        <Box
          sx={{
            width: "85vw",
            mx: "auto",
            my: 4,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Section1 />
          <Section2 />
        </Box>
        <EmailUpdate />
        <ImageSlider />
      </Box>
    </Box>
  );
};

export default Home;
