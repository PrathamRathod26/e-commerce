import {
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const UserProfile = () => {
  // Dummy data (later you’ll fetch this from backend)
  const orders = [
    { id: "ORD123", status: "Delivered", total: 1200, date: "2025-08-15" },
    { id: "ORD124", status: "Shipped", total: 800, date: "2025-08-20" },
  ];

  const addresses = [
    { id: 1, label: "Home", details: "123 Street, Ahmedabad, India" },
    { id: 2, label: "Office", details: "456 Tech Park, Gandhinagar, India" },
  ];

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
      <Box sx={{ mt: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1" fontStyle="italic">
          Profile
        </Typography>
      </Box>

      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          My Orders
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {orders.map((order) => (
            <ListItem
              key={order.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
              }}
            >
              <ListItemText
                primary={`Order #${order.id} - ${order.status}`}
                secondary={`Date: ${order.date}`}
              />
              <Typography variant="body1" fontWeight="bold">
                ₹{order.total}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          View All Orders
        </Button>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Saved Addresses
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {addresses.map((address) => (
            <ListItem
              key={address.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #eee",
              }}
            >
              <ListItemText
                primary={address.label}
                secondary={address.details}
              />
              <Button size="small" variant="outlined">
                Edit
              </Button>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Add New Address
        </Button>
      </Paper>
    </Box>
  );
};

export default UserProfile;
