import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ReviewComment = ({
  heading1,
  heading2,
  heading1Variant = "h2", // default values
  heading2Variant = "h2",
  rating,
  reviewCount,
  userImages,
}) => {
  const maxStars = 5;
  const rotations = ["-16deg", "6deg", "-8deg"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: 2,
        mt: 6,
      }}
    >
      {/* Headings */}
      <Box>
        <Typography
          variant={heading1Variant}
          color="textPrimary"
          fontWeight="bold"
        >
          {heading1}
        </Typography>
        <Typography variant={heading2Variant} color="textPrimary">
          {heading2}
        </Typography>
      </Box>

      {/* Ratings + Avatars */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-end",
        }}
      >
        {/* Ratings */}
        <Box sx={{ textAlign: "right" }}>
          <Box>
            {[...Array(maxStars)].map((_, i) => {
              const starNumber = i + 1;
              if (rating >= starNumber) {
                return (
                  <StarIcon
                    key={i}
                    fontSize="small"
                    sx={{ color: "#fbbf24" }}
                  />
                );
              } else if (rating >= starNumber - 0.5) {
                return (
                  <StarHalfIcon
                    key={i}
                    fontSize="small"
                    sx={{ color: "#fbbf24" }}
                  />
                );
              } else {
                return (
                  <StarBorderIcon
                    key={i}
                    fontSize="small"
                    sx={{ color: "#e5e7eb" }}
                  />
                );
              }
            })}
          </Box>
          <Typography variant="h5" color="textPrimary">
            {rating} ({reviewCount.toLocaleString()} reviews)
          </Typography>
        </Box>

        {/* User Images */}
        <Box sx={{ display: "flex" }}>
          {userImages.slice(0, 3).map((img, i) => (
            <Box
              component="img"
              key={i}
              src={img}
              alt={`User ${i + 1}`}
              sx={{
                width: 70,
                height: 70,
                borderRadius: 3,
                objectFit: "cover",
                border: "4px solid white",
                ml: i === 0 ? 0 : -1.5,
                boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
                transform: `rotate(${rotations[i % rotations.length]})`,
                transition: "transform 0.3s",
                ":hover": {
                  transform: `scale(1.08) rotate(${
                    rotations[i % rotations.length]
                  })`,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewComment;
