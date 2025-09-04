import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2" color="error" fontWeight="bold">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        It might have been moved or the link is broken.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
