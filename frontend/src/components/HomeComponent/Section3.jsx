import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import ImageSlider from "./ImageSlider";
const image1 = "https://placehold.co/1600x900";
const section3 = () => {
  return (
    <Box>
      <Box flex={1} sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image1}
          alt="Hero 1"
          sx={{
            width: "100%",
            height: { xs: 300, sm: 400, md: 500 },
            objectFit: "cover",
            borderRadius: 4,
            display: "block",
          }}
        />

        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            color: "primary.contrastText",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 3,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" } }}
            >
              Stay Updated, Stay Radiant
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
            >
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%",
            }}
          >
            <TextField
              id="email"
              label="Email"
              value=""
              onChange={() => {}}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />

            <Button
              variant="contained"
              sx={{ px: { xs: 2, sm: 4 }, width: { xs: "100%", sm: "auto" } }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 4, mb: 8, textAlign: "center" }}>
        <Typography variant="h4" textAlign="center">
          Follow on Instagram
        </Typography>
      </Box>
      <Box>
        <ImageSlider />
      </Box>
    </Box>
  );
};

export default section3;
