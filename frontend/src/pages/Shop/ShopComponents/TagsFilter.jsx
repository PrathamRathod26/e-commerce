import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const TagsFilter = () => {
  const tags = [
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
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: 200,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "background.default",
          zIndex: 1,
        }}
      >
        Tags
      </Typography>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 1,
          scrollbarWidth: "thin",
          scrollbarColor: "#888 transparent",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        {tags.map((tag) => (
          <FormControlLabel
            key={tag}
            control={<Checkbox />}
            label={tag}
            sx={{ display: "block" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsFilter;
