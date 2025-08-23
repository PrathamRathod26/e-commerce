import React from "react";
import { Box } from "@mui/material";
import Routes from "./routes/Routes.jsx";
import "./animations/ImageSlider.css";

import NavBar from "./components/NavBar.jsx";
import Fotter from "./components/Fotter.jsx";
import EmailUpdate from "./components/EmailUpdate.jsx";
import ImageSlider from "./components/ImageSlider.jsx";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          bgcolor: "background.default",
          width: "100%",
          py: 8,
        }}
      >
        <Routes />
        <EmailUpdate />
        <ImageSlider />
      </Box>

      <Fotter />
      <Box sx={{ height: { sm: "auto", md: 600, lg: 400 } }} />
    </Box>
  );
};

export default App;
