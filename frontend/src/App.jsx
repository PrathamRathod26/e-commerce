import React from "react";
import { Box } from "@mui/material";
import Routes from "./routes/Routes.jsx";
import "./animations/ImageSlider.css";

import NavBar from "./components/NavBar.jsx";
import Fotter from "./components/Fotter.jsx";

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
          minHeight: "100vh",
          py: 8,
        }}
      >
        <Routes />
      </Box>

      <Fotter />
    </Box>
  );
};

export default App;
