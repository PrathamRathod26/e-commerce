import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const CategoriesFilter = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      {["Clothing", "Accessories", "Footwear"].map((cat) => (
        <FormControlLabel
          key={cat}
          control={<Checkbox />}
          label={cat}
          sx={{ display: "block" }}
        />
      ))}
    </Box>
  );
};

export default CategoriesFilter;
