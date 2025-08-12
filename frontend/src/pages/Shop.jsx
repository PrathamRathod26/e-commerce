import { Box, Typography, Button, Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CategoriesFilter from "../components/ShopComponents/CategoriesFilter.jsx";
import TagsFilter from "../components/ShopComponents/TagsFilter.jsx";
import SizeFilter from "../components/ShopComponents/SizeFilter.jsx";
import PriceFilter from "../components/ShopComponents/PriceFilter.jsx";
import DiscountFilter from "../components/ShopComponents/DiscountFilter.jsx";
import ProductCard from "../components/GeneralComponent/ProductCard.jsx";
import productImage1 from "../assets/product1.png";
import productImage1hover from "../assets/product1hover.jpg";
import EmailUpdate from "../components/GeneralComponent/EmailUpdate.jsx";
import ImageSlider from "../components/GeneralComponent/ImageSlider.jsx";

const products = Array(15).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
});

const FilterContent = ({ onApply }) => (
  <Box sx={{ p: 2, width: 300 }}>
    <Typography variant="h5" color="inherit" gutterBottom fontWeight="bold">Filters</Typography>
    <CategoriesFilter />
    <TagsFilter />
    <SizeFilter />
    <PriceFilter />
    <DiscountFilter />
    <Box sx={{ mt: 2 }}>
      <Button variant="contained" fullWidth onClick={onApply}>
        Apply Filters
      </Button>
    </Box>
  </Box>
);

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleApply = () => {
    setDrawerOpen(false);
    console.log("Filters applied!");
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        bgcolor: "background.default",
        width: "100%",
        py: 8,
      }}
    >
      {/* Heading */}
      <Box sx={{ my: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1">Shop</Typography>
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          width: "85vw",
          mx: "auto",
          flexDirection: "row",
          gap: 2,
        }}
      >
        {/* Sidebar - show only if not mobile */}
        {!isMobile && <FilterContent onApply={handleApply} />}

        {/* Main content */}
        <Box sx={{ flex: 1, p: 2 }}>
          {/* Filter button only on mobile */}
          {isMobile && (
            <Box sx={{ mb: 2, textAlign: "right" }}>
              <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
                Filters
              </Button>
            </Box>
          )}

          {/* Product grid */}
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                overflowY: "scroll",
                height: "140vh",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  },
                  gap: 3,
                }}
              >
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </Box>
            </Box>

            {/* Blurry fade effect */}
            {/* <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 200,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.17), rgba(255,255,255,0))",
                backdropFilter: "blur(0.5px)",
              }}
            /> */}
          </Box>
        </Box>
      </Box>

      {/* Drawer for mobile filters */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterContent onApply={handleApply} />
      </Drawer>

      <EmailUpdate />
      <ImageSlider />
    </Box>
  );
};

export default Shop;
