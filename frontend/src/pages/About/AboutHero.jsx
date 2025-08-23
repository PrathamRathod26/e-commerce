import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const AboutHero = () => {
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
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={"https://placehold.co/1600x900"}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            pl: { xs: 2, sm: 4, md: 6, lg: 8 },
            gap: 1
          }}
        >
          <Typography variant="h4" color="white" component="h1">
            Redifining
          </Typography>
          <Typography variant="h5" color="white" component="h2">
            E-commerce Excellence
          </Typography>
          <Typography variant="body1" color="white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, iure a minus et exercitationem ad beatae veniam. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, facere. Vel, amet.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutHero
