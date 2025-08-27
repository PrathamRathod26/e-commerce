import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const CategoryHero = ({ name, imageUrl, description }) => {
  const [offset1, setOffset1] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset1(window.scrollY / 2);
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
          height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
          zIndex: -1,
        }}
      >
        <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <Box
            component="img"
            src={imageUrl}
            alt={name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
          display: "flex",
          alignItems: "flex-end",
          color: "white",
          p: 8,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h2" color="white">
            {name}
          </Typography>
          <Typography variant="h5" color="white">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryHero;
