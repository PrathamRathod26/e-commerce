import { Box, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import heroImage1 from "../assets/heroImage1.jpg";
import heroImage2 from "../assets/heroImage2.jpg";
import heroImage3 from "../assets/heroImage3.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const images = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.map((src, index) => (
          <Box key={index} sx={{ minWidth: "100vw", height: "100vh" }}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#fff", 
        }}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#fff",
        }}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default HeroSection;
