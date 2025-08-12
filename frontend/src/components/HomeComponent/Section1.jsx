import React from "react";
import { Box, Button, Paper, Typography, IconButton } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import productImage1 from "../../assets/product1.png";
import productImage1hover from "../../assets/product1hover.jpg";

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

const ProductCard = ({ img, hoverImg, title }) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 2.5,
      overflow: "hidden",
      mb: 4,
      position: "relative",
    }}
    elevation={3}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover .hover-img": {
          opacity: 1,
        },
        "&:hover .main-img": {
          opacity: 0.3,
        },
      }}
    >
      <IconButton
        aria-label="Add to favorites"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          zIndex: 2,
          color: "inherit",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          },
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>

      <Box
        component="img"
        src={img}
        alt={title}
        className="main-img"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease",
          display: "block",
        }}
      />

      <Box
        component="img"
        src={hoverImg}
        alt={`${title} hover`}
        className="hover-img"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </Box>

    <Box px={2} pb={2}>
      <Typography
        variant="h6"
        color="inherit"
        textAlign="center"
        sx={{ mt: 2, mb: 3 }}
      >
        {title}
      </Typography>
    </Box>
  </Paper>
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
