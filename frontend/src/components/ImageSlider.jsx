import { Box } from "@mui/material";
const image1 = "https://placehold.co/400x400?text=Image1";
const image2 = "https://placehold.co/400x400?text=Image2";
const image3 = "https://placehold.co/400x400?text=Image3";
const image4 = "https://placehold.co/400x400?text=Image4";
const image5 = "https://placehold.co/400x400?text=Image5";
const image6 = "https://placehold.co/400x400?text=Image6";
const image7 = "https://placehold.co/400x400?text=Image7";
const images = [
  image1,
  image2, 
  image3,
  image4,
  image5,
  image6,
  image7,
];

const ImageSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "scroll-left 50s linear infinite",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: {xs: 200, md: 250, lg: 350},
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
