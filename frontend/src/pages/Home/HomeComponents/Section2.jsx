import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewComment from "../../../components/ReviewComment";

const heroImage1 = "https://placehold.co/960x600";
const heroImage2 = "https://placehold.co/600x400";
const heroImage3 = "https://placehold.co/600x400";
const Section2Image = "https://placehold.co/1600x900";

const Rating = ({ value = 5, text }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 0.5,
      alignItems: "center",
    }}
  >
    <Box>
      {[...Array(value)].map((_, i) => (
        <StarIcon key={i} fontSize="small" />
      ))}
    </Box>
    {text && <Typography variant="body2">{text}</Typography>}
  </Box>
);

const Section2 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* Top Banner */}
      <Box
        component="img"
        src={Section2Image}
        alt="Section 2"
        sx={{
          height: { xs: 400, sm: 500, md: 600 },
          width: "100%",
          objectFit: "cover",
          borderRadius: 6,
        }}
      />

      <ReviewComment
        heading1="Lorem ipsum"
        heading2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quaerat harum iusto reprehenderit!"
        heading1Variant="h4"
        heading2Variant="h6"
        rating={4.7}
        reviewCount={1463}
        userImages={[
          "https://placehold.co/100x100?text=User1",
          "https://placehold.co/100x100?text=User2",
          "https://placehold.co/100x100?text=User3",
        ]}
      />

      {/* Image Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 2,
        }}
      >
        {/* Left Large Image */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <Box
            component="img"
            src={heroImage1}
            alt="Hero 1"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
          <OverlayLabel text="Placeholder Text 1" />
        </Box>

        {/* Right Stacked Images */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          {[heroImage2, heroImage3].map((img, idx) => (
            <Box key={idx} sx={{ position: "relative", flex: 1 }}>
              <Box
                component="img"
                src={img}
                alt={`Hero ${idx + 2}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
              <OverlayLabel text={`Placeholder Text ${idx + 2}`} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Quote + Rating */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ maxWidth: 800, mx: "auto" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Rating value={5} text="Lorem ipsum dolor sit. — Verified User" />
        </Box>
      </Box>
    </Box>
  );
};

const OverlayLabel = ({ text }) => (
  <Box
    sx={{
      position: "absolute",
      top: 10,
      left: 10,
      color: "white",
      backgroundColor: "rgba(0,0,0,0.5)",
      px: 1,
      py: 0.5,
      borderRadius: 2,
      fontSize: "0.875rem",
    }}
  >
    {text}
  </Box>
);

export default Section2;
