import { Box, Button, Drawer, Typography, useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CategoryHero from "./ShopComponents/CategoryHero";
import ProductCard from "../../components/ProductCard.jsx";
import { category, categoryProducts } from "../../data/categoryData.js";
import TagsFilter from "./ShopComponents/TagsFilter.jsx";
import SizeFilter from "./ShopComponents/SizeFilter.jsx";
import PriceFilter from "./ShopComponents/PriceFilter.jsx";
import DiscountFilter from "./ShopComponents/DiscountFilter.jsx";
import { useState } from "react";

const FilterContent = ({ onApply }) => (
  <Box
    sx={{
      p: 2,
      width: { md: 200, xl: 300 },
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <Typography
      variant="h5"
      color="inherit"
      gutterBottom
      fontWeight="bold"
      sx={{
        py: 1,
      }}
    >
      Filters
    </Typography>

    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        pr: 1,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TagsFilter />
      <SizeFilter />
      <PriceFilter />
      <DiscountFilter />
    </Box>

    <Box sx={{ mt: 2 }}>
      <Button variant="contained" fullWidth onClick={onApply}>
        Apply Filters
      </Button>
    </Box>
  </Box>
);

const Category = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleApply = () => {
    setDrawerOpen(false);
    console.log("Filters applied!");
  };
  return (
    <Box>
      <CategoryHero name={category.name} imageUrl={category.imageUrl} description={category.categoryDescription}/>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          willChange: "transform",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 1500,
            px: 2,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            my: {xs: 1, sm: 2, md: 4, lg: 8},
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              mx: "auto",
              flexDirection: "row",
              gap: 2,
              mb: 8,
            }}
          >
            {!isMobile && (
              <Box
                sx={{
                  position: "sticky",
                  top: 20,
                  alignSelf: "flex-start",
                  height: "calc(100vh - 40px)",
                }}
              >
                <FilterContent onApply={handleApply} />
              </Box>
            )}

            <Box sx={{ flex: 1, p: 2 }}>
              {isMobile && (
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => setDrawerOpen(true)}
                    fullWidth
                  >
                    Filters
                  </Button>
                </Box>
              )}

              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: 4,
                  }}
                >
                  {categoryProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
              width: 250,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 250,
                boxSizing: "border-box",
              },
            }}
          >
            <FilterContent onApply={handleApply} />
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
