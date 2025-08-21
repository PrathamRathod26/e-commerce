import React from "react";
import { Box } from "@mui/material";
import Routes from "./routes/routes.jsx";
import "./animations/ImageSlider.css";

import NavBar from "./components/GeneralComponent/NavBar.jsx";
import Fotter from "./components/GeneralComponent/Fotter.jsx";
import EmailUpdate from "./components/GeneralComponent/EmailUpdate.jsx";
import ImageSlider from "./components/GeneralComponent/ImageSlider.jsx";

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
