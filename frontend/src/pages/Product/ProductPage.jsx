import { Box, Typography, Paper, Button } from "@mui/material";
import { product } from "../../data/product.js";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import InfoExpandableCard from "./InfoExpandableCard.jsx";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        my: 8,
      }}
    >
      <Box sx={{ mt: 4, py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 5 }}
          >
            {product.img.map((img, index) => (
              <Box
                component="img"
                src={img}
                key={index}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Box>
          <Box
            sx={{
              flex: 4,
              position: "sticky",
              top: 20,
              alignSelf: "flex-start",
              height: "calc(100vh - 40px)",
              overflowY: "auto",
              pr: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",              
            }}
          >
            <Box>
              <Typography variant="h3" color="textPrimary">
                {product.productName}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {product.productDescription}
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" },
                  alignItems: "center",
                  gap: { xs: 2, md: 3 },
                  justifyContent: "center",
                  my: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                    variant="outlined"
                    disabled={quantity === 0}
                  >
                    <RemoveIcon />
                  </Button>

                  <Paper
                    elevation={2}
                    sx={{
                      py: 0.5,
                      px: 3,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: 50,
                    }}
                  >
                    <Typography variant="body1" color="textPrimary">
                      {quantity}
                    </Typography>
                  </Paper>

                  <Button
                    onClick={() => setQuantity(quantity + 1)}
                    variant="outlined"
                    color="primary"
                  >
                    <AddIcon />
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ borderRadius: 2, py: 1.2 }}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ borderRadius: 2, py: 1.2 }}
                  >
                    Add To Cart
                  </Button>
                </Box>
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
                    Free Shipping Over $50
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <VerifiedOutlinedIcon fontSize="small" />
                  <Typography variant="subtitle2">14 Days Return</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {product.info.map(([title, text]) => (
                <InfoExpandableCard
                  key={title}
                  infoTitle={title}
                  infoText={text}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
