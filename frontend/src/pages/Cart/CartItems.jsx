// CartItem.jsx
import { Box, Typography, Paper, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ item, index, quantities, handleQuantityChange }) => {
  return (
    <Paper key={item.productId} sx={{ display: "flex", overflow: "hidden" }}>
      <Box
        component="img"
        src="https://placehold.co/150x100?text=Product"
        alt={item.productName}
        sx={{ width: 200, height: 150, objectFit: "cover" }}
      />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          gap: 2,
          p: 2,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{item.productName}</Typography>
          <Typography variant="body1">Price: {item.price} Rs</Typography>

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
  );
};

export default CartItem;
