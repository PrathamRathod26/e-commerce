import { Box, Typography } from "@mui/material";
import {cartData, coupons, addresses} from "../../data/cart.js";
import { useEffect, useState, useMemo } from "react";
import CartItem from "./CartItems.jsx";
import CheckoutPanel from "./CheckoutPanel.jsx";

const Cart = () => {
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      setQuantities(cartData.map((item) => item.quantity));
    }
  }, []);

  const handleQuantityChange = (index, change) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(0, q + change) : q))
    );
  };

  // calculate total price
  const totalPrice = useMemo(
    () =>
      cartData.reduce(
        (acc, item, i) => acc + (quantities[i] ?? 0) * item.price,
        0
      ),
    [quantities]
  );

  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        py: 8,
      }}
    >
      {/* Title */}
      <Box sx={{ mt: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1" fontStyle="italic">
          Cart
        </Typography>
      </Box>

      {/* Main Layout */}
      <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
        {/* Left: Cart Items */}
        <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          {cartData.map((item, index) => (
            <CartItem
              key={item.productId}
              item={item}
              index={index}
              quantities={quantities}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </Box>

        {/* Right: Checkout Panel */}
        <CheckoutPanel
          totalPrice={totalPrice}
          coupons={coupons}
          addresses={addresses}
        />
      </Box>
    </Box>
  );
};

export default Cart;
