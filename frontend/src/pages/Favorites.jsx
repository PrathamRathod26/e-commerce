import { Box, Typography } from '@mui/material'
import productImage1 from "../assets/product1.png";
import productImage1hover from "../assets/product1hover.jpg";
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const products = Array(16).fill({
    img: productImage1,
    hoverImg: productImage1hover,
    title: "Product Name",
  });
  return (
    <Box>
      <Box sx={{ my: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1">Favroites</Typography>
      </Box>
      <Box
        sx={{
          width: "85vw",
          mx: "auto",
          my: 4,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
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
  );
};

export default Favorites;
