import { Box, Typography, IconButton, Paper, Button } from '@mui/material'
import { product } from '../../data/product.js'
import { useState } from 'react';

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Box
      sx={{
        maxWidth: 1500,
        bgcolor: "lightblue",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        my: 8,
      }}
    >
      <Box sx={{ mt: 4, py: 2 }}>
        <Box>
          <Box>
            <Box component={"img"} />
            <Box component={"img"} />
          </Box>
          <Box>
            <Box>
              <Typography variant="h3" color="textPrimary">
                {product.productName}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {product.productDescription}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button onClick={() => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>
                  <RemoveIcon />
                </Button>
                <Box>{quantity}</Box>
                <Button onClick={() => {setQuantity(quantity + 1)}}>
                  <AddIcon />
                </Button>
              </Box>
              <Button variant='contained' sx={{ px: 4, py: 1 }} onClick={() => {} }>
                <Typography variant="button">
                  Buy for ${product.cost}
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                color: "textprimary",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalShippingIcon fontSize="small" />
                <Typography variant="subtitle2">
                  Free Shiping Over $50
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <VerifiedOutlinedIcon fontSize="small" />
                <Typography variant="subtitle2">14 Days Return </Typography>
                aljgho hoi h
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPage
