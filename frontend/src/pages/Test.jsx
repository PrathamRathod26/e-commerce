import React from "react";
import { Box } from "@mui/material";

const Test = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          position: "fixed",
          top: '30vh',
          left: 0,
          height: "70vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightyellow",
          zIndex: 1,
        }}
      >
        Box 2
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          zIndex: 2,
        }}
      >
        Box 1
      </Box>

      <Box sx={{ height: "70vh" }} />
    </Box>
  );
};

export default Test;
