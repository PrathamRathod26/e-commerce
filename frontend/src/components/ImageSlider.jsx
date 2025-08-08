import { Box } from "@mui/material";
import image1 from "../assets/heroImage1.jpg";
import image2 from "../assets/heroImage2.jpg";
import image3 from "../assets/heroImage3.jpg";
import image5 from "../assets/product2.jpg";
import image6 from "../assets/product1hover.jpg";
const images = [
  image1,
  image2, 
  image3,
  image5,
  image6,
];

const ImageSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "scroll-left 20s linear infinite",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: 200,
              mr: 2,
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Slide ${index}`}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
