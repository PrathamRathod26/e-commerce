import React from "react";
import { Box, Typography } from "@mui/material";

const RollingText = ({ text, firstTextSx = {}, secondTextSx = {} }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        overflow: "hidden",
        height: "1.5em",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "translateY(-50%)",
          },
        }}
      >
        <Typography variant="body1" component="span" sx={firstTextSx}>
          {text}
        </Typography>

        <Typography
          variant="body1"
          component="span"
          sx={{
            ...secondTextSx,
            transition: "color 0.3s ease",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default RollingText;
