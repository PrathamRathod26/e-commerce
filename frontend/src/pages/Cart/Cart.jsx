import { Box, Typography, Paper, Button } from "@mui/material";
import cartData from "../../data/cart.js";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const Cart = () => {
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      // initialize quantities from cartData
      setQuantities(cartData.map((item) => item.quantity));
    }
  }, []);

  const handleQuantityChange = (index, change) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(0, q + change) : q))
    );
  };

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
      <Box sx={{ mt: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1" fontStyle="italic">
          Cart
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cartData.map((item, index) => (
          <Paper
            key={item.productId}
            sx={{ display: "flex", overflow: "hidden" }}
          >
            <Box
              component="img"
              src="https://placehold.co/150x100?text=Product"
              alt={item.productName}
              sx={{ width: 200, height: 150, objectFit: "cover" }}
            />
            <Box sx={{ display: "flex", flex: 1, gap: 2, p: 2, justifyContent: "space-between", flexWrap: "wrap" }}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // gap: 1,
                }}
              >
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="body1">
                  Price: {item.price} Rs
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0.5, sm: 1, md: 1.5 },
                    mt: 1,
                  }}
                >
                  <Button
                    onClick={() => handleQuantityChange(index, -1)}
                    variant="outlined"
                    disabled={quantities[index] === 0}
                    sx={{
                      minWidth: { xs: 28, sm: 36, md: 40 },
                      height: { xs: 32, sm: 40, md: 44 },
                      p: 0,
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>

                  <Box
                    elevation={2}
                    sx={{
                      height: { xs: 32, sm: 40, md: 44 },
                      minWidth: { xs: 32, sm: 44, md: 50 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      px: { xs: 1, sm: 2, md: 3 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
                      }}
                      color="textPrimary"
                    >
                      {quantities[index] ?? 0}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => handleQuantityChange(index, 1)}
                    variant="outlined"
                    color="primary"
                    sx={{
                      minWidth: { xs: 28, sm: 36, md: 40 },
                      height: { xs: 32, sm: 40, md: 44 },
                      p: 0,
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography variant="body2" color="textPrimary">
                  Cost: {quantities[index] * item.price} Rs
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;
