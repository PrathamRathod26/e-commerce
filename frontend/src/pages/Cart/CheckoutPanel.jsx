import {
  Box,
  Typography,
  Paper,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";

// Icons
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const CheckoutPanel = ({ totalPrice, coupons, addresses, onAddAddress }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
const [selectedAddress, setSelectedAddress] = useState(
  addresses.length > 0 ? addresses[0].id : ""
);

  // Recalculate discount whenever coupon changes
  const applyCoupon = (code) => {
    if (!code) {
      setDiscount(0);
      return;
    }
    const coupon = coupons.find((c) => c.code === code);
    if (!coupon) {
      setDiscount(0);
      return;
    }
    if (coupon.type === "flat") {
      setDiscount(coupon.discount);
    } else {
      setDiscount((totalPrice * coupon.discount) / 100);
    }
  };

  const finalTotal = Math.max(0, totalPrice - discount);

  // Payment options with icons
  const paymentOptions = [
    { value: "cod", label: "Cash on Delivery", icon: <LocalAtmIcon /> },
    { value: "card", label: "Credit/Debit Card", icon: <CreditCardIcon /> },
    { value: "upi", label: "UPI / Wallet", icon: <AccountBalanceWalletIcon /> },
  ];

  return (
    <Box
      sx={{
        position: "sticky",
        top: 30,
        alignSelf: "flex-start",
        height: "100%",
        flex: 1,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom>
            Checkout
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Shipping Address
          </Typography>
          <FormControl fullWidth size="small" sx={{ mb: 1 }}>
            <InputLabel
              sx={{
                bgcolor: "background.paper",
                px: 0.5,
                borderRadius: 1,
              }}
            >
              Select Address
            </InputLabel>
            <Select
              value={selectedAddress}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "new") {
                  if (onAddAddress) onAddAddress();
                } else {
                  setSelectedAddress(value);
                }
              }}
              label="Select Address"
              sx={{
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey.400",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              }}
            >
              {addresses.map((address, idx) => (
                <MenuItem
                  key={idx}
                  value={address.id}
                  sx={{
                    borderRadius: 1,
                    my: 0.5,
                    "&.Mui-selected": {
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                    },
                    "&.Mui-selected:hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  <Typography variant="body2" noWrap>
                    {address.label} – {address.details}
                  </Typography>
                </MenuItem>
              ))}

              <MenuItem
                value="new"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  borderTop: "1px solid",
                  borderColor: "grey.300",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AddLocationAltIcon fontSize="small" />
                Add New Address
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Apply Coupon
          </Typography>
          <FormControl fullWidth size="small" sx={{ mb: 1 }}>
            <InputLabel
              sx={{
                bgcolor: "background.paper",
                px: 0.5,
                borderRadius: 1,
              }}
            >
              Select Coupon
            </InputLabel>
            <Select
              value={selectedCoupon}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "remove") {
                  setSelectedCoupon("");
                  applyCoupon("");
                } else {
                  setSelectedCoupon(value);
                  applyCoupon(value);
                }
              }}
              label="Select Coupon"
              sx={{
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey.400",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              }}
            >
              {coupons.map((coupon) => (
                <MenuItem
                  key={coupon.code}
                  value={coupon.code}
                  sx={{
                    borderRadius: 1,
                    my: 0.5,
                    "&.Mui-selected": {
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                    },
                    "&.Mui-selected:hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>{coupon.code}</Typography>
                    <Typography variant="body2">
                      {coupon.type === "flat"
                        ? `- ₹${coupon.discount}`
                        : `- ${coupon.discount}%`}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}

              <MenuItem
                value="remove"
                sx={{
                  color: "error.main",
                  fontWeight: "bold",
                  borderTop: "1px solid",
                  borderColor: "grey.300",
                  mt: 1,
                }}
              >
                Remove Coupon
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Payment Method */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Payment Method
          </Typography>
          <FormControl fullWidth size="small">
            <InputLabel
              sx={{
                bgcolor: "background.paper",
                px: 0.5,
                borderRadius: 1,
              }}
            >
              Select Payment
            </InputLabel>
            <Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              label="Select Payment"
              sx={{
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey.400",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              }}
            >
              {paymentOptions.map((method) => (
                <MenuItem
                  key={method.value}
                  value={method.value}
                  sx={{
                    borderRadius: 1,
                    my: 0.5,
                    "&.Mui-selected": {
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                    },
                    "&.Mui-selected:hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    {method.icon}
                    <Typography>{method.label}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Price Breakdown
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Subtotal</Typography>
            <Typography>{totalPrice} Rs</Typography>
          </Box>

          {discount > 0 && (
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>
                Discount {selectedCoupon ? `(${selectedCoupon})` : ""}
              </Typography>
              <Typography color="green">- {discount} Rs</Typography>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              borderTop: "1px solid",
              borderColor: "grey.300",
              pt: 1,
            }}
          >
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">{finalTotal} Rs</Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Proceed to Checkout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CheckoutPanel;
