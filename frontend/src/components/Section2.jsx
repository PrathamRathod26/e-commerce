import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Section2Image from "../assets/section2Image.jpg";
import image1 from "../assets/heroImage1.jpg";
import image2 from "../assets/heroImage2.jpg";
import image3 from "../assets/heroImage3.jpg";

const section2 = () => {
  return (
    <Box sx={{ width: "85vw", mx: "auto" }}>
      {/* Top Banner Image */}
      <Box sx={{ mb: 12, textAlign: "center" }}>
        <Box
          component="img"
          src={Section2Image}
          alt="Section 2"
          sx={{
            height: 600,
            width: "100%",
            objectFit: "cover",
            borderRadius: 6,
            display: "block",
            backgroundColor: "#f0f0f0",
          }}
        />
      </Box>

      {/* Heading and Review Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          px: 4,
        }}
      >
        {/* Left Text */}
        <Box flex={3}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            Lorem, ipsum dolor.
          </Typography>
          <Typography variant="h5">Lorem, ipsum dolor.</Typography>
        </Box>

        {/* Star Rating */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Box>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} fontSize="small" />
            ))}
          </Box>
          <Typography variant="body2">4.7 (1,109 reviews)</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box flex={1} sx={{ position: "relative" }}>
          <Box
            component="img"
            src={image1}
            alt="Hero 1"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              p: 1,
              borderRadius: 2,
            }}
          >
            Placeholder Text 1
          </Box>
        </Box>

        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {[image2, image3].map((img, idx) => (
            <Box
              key={idx}
              sx={{ position: "relative", width: "100%", height: "100%" }}
            >
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
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                Placeholder Text {idx + 2}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default section2;
