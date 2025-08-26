import {
  Box,
  Typography,
  Button,
  Drawer,
  useMediaQuery,
  IconButton,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesFilter from "./ShopComponents/CategoriesFilter.jsx";
import TagsFilter from "./ShopComponents/TagsFilter.jsx";
import SizeFilter from "./ShopComponents/SizeFilter.jsx";
import PriceFilter from "./ShopComponents/PriceFilter.jsx";
import DiscountFilter from "./ShopComponents/DiscountFilter.jsx";
import ProductCard from "../../components/ProductCard.jsx";
import productImage1 from "../../assets/product1.png";
import productImage1hover from "../../assets/product1hover.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = Array(15).fill({
  img: productImage1,
  hoverImg: productImage1hover,
  title: "Product Name",
});

const category = [
  {
    name: "Category 1",
    imageUrl: "https://placehold.co/600x400",
    page: "/shop/category1",
  },
  {
    name: "Category 2",
    imageUrl: "https://placehold.co/600x400",
    page: "/shop/category2",
  },
  {
    name: "Category 3",
    imageUrl: "https://placehold.co/600x400",
    page: "/shop/category3",
  },
];

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
      <CategoriesFilter />
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

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleApply = () => {
    setDrawerOpen(false);
    console.log("Filters applied!");
  };

  return (
    <Box>
      <Box sx={{ my: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1" fontStyle="italic">
          Shop
        </Typography>
      </Box>

      <Box
        sx={{
          width: "85vw",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 2, md: 4 },
          mx: "auto",
          my: 4,
          justifyContent: "center",
        }}
      >
        {category.map((category, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 2.5,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
            elevation={1}
            onClick={() => navigate(category.page)}
          >
            <Box
              component="img"
              src={category.imageUrl}
              sx={{
                display: { xs: "none", sm: "block" },
                width: "100%",
                height: "auto",
                objectFit: "cover",
                ":hover": {
                  filter: "blur(2px)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            />
            <Box
              sx={{
                py: 1,
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="textPrimary">
                {category.name}
              </Typography>
              <IconButton
                color="primary"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "85vw",
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
              {products.map((product, index) => (
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
  );
};

export default Shop;
