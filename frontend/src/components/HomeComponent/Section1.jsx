import React from "react";
import { Box, Button, Paper, Typography, IconButton } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import productImage1 from "../../assets/product1.png";
import productImage1hover from "../../assets/product1hover.jpg";
import ProductCard from "../GeneralComponent/ProductCard";

const features = Array(4).fill({
  icon: <CheckroomIcon fontSize="large" />,
  title: "Product Features",
  description: "Some interesting details on the feature.",
});

const products = Array(3).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
});

const FeatureCard = ({ icon, title, description }) => (
  <Box
    sx={{
      width: "100%",
      p: 2,
      bgcolor: "secondary.main",
      color: "text.primary",
      borderRadius: 3,
      height: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
      textAlign: "center",
    }}
  >
    {icon}
    <Typography variant="body1" color="inherit">
      {title}
    </Typography>
    <Typography variant="caption" color="inherit">
      {description}
    </Typography>
  </Box>
);

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
