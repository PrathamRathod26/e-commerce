import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const DiscountFilter = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Discount
      </Typography>
      {["10% Off", "20% Off"].map((discount) => (
        <FormControlLabel
          key={discount}
          control={<Checkbox />}
          label={discount}
          sx={{ display: "block" }}
        />
      ))}
    </Box>
  );
};

export default DiscountFilter;
