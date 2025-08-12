import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const TagsFilter = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Tags
      </Typography>
      {[
        "New",
        "Sale",
        "Trending",
        "Best Seller",
        "Limited",
        "Eco-friendly",
        "Handmade",
        "Gift",
        "Exclusive",
        "Custom",
      ].map((tag) => (
        <FormControlLabel
          key={tag}
          control={<Checkbox />}
          label={tag}
          sx={{ display: "block" }}
        />
      ))}
    </Box>
  );
};

export default TagsFilter;
