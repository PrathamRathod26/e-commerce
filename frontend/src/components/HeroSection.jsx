import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import heroImage1 from "../assets/heroBackground.jpg";
import heroImage2 from "../assets/heroImage2.jpg";
import heroImage3 from "../assets/heroImage3.jpg";

const images = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const responsiveHeight = {
    sm: "50vh",
    md: "70vh",
    lg: "100vh",
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: responsiveHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: `${100 / images.length}%`,
              height: responsiveHeight,
              flexShrink: 0,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Slide ${index}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" color="white">
                Welcome to Our Store
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 3,
          transform: "translateY(-50%)",
          zIndex: 10,
          color: "#fff",
        }}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 3,
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
