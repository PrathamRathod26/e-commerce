import React from "react";
import { Box } from "@mui/material";
import Routes from "./routes/routes.jsx";
import "./animations/ImageSlider.css";

import NavBar from "./components/GeneralComponent/NavBar.jsx";
import Fotter from "./components/GeneralComponent/Fotter.jsx";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes />
      <Fotter />
      <Box sx={{ height: { sm: "auto", md: 600, lg: 400 } }} />
    </Box>
  );
};

export default App;
