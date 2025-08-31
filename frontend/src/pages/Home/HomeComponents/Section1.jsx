import React from "react";
import { Box, Button, Paper, Typography, IconButton } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ProductCard from "../../../components/ProductCard";
import FeatureCard from "../../../components/FeatureCard";

import { products } from "../../../data/product.js";

const features = Array(4).fill({
  icon: <CheckroomIcon fontSize="large" />,
  title: "Product Features",
  description: "Some interesting details on the feature.",
});

const Section1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          width: "100%",
          justifyItems: "center",
          my: 2,
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Box>

      <Box>
        <Typography variant="h4" color="inherit" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          consequuntur.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained">Filter</Button>
          <Button variant="contained">Filter</Button>
          <Button variant="contained">Filter</Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="text">Shop filter</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
