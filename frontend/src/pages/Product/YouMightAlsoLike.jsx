import { Box, Typography } from '@mui/material'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products.js'
import React from 'react'

const YouMightAlsoLike = () => {
  return (
    <Box>
      <Typography variant="h2" color="textPrimary">
        You Might Also Like
      </Typography>
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
    </Box>
  );
}

export default YouMightAlsoLike
