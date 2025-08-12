import { Box } from "@mui/material";
const image1 = "https://placehold.co/200x200";
const image2 = "https://placehold.co/200x200";
const image3 = "https://placehold.co/200x200";
const image4 = "https://placehold.co/200x200";
const image5 = "https://placehold.co/200x200";
const image6 = "https://placehold.co/200x200";
const image7 = "https://placehold.co/200x200";
const images = [
  image1,
  image2, 
  image3,
  image4,
  image5,
  image6,
  image2
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
