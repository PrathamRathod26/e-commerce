import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";

const PriceFilter = () => {
  const [value, setValue] = useState([20, 80]);

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Price
      </Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
      <Typography variant="body2">
        {value[0]} Rs - {value[1]} Rs
      </Typography>
    </Box>
  );
};

export default PriceFilter;
