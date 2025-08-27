import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ img, hoverImg, title, productUrl }) => {
  const navigate = useNavigate();
  return (
    <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 2.5,
      overflow: "hidden",
      position: "relative",
    }}
    elevation={3}
    onClick={()=> navigate(productUrl)}
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

    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography
        variant="h5"
        color="inherit"
      >
        {title}
      </Typography>
    </Box>
  </Paper>
  );
}

export default ProductCard;
