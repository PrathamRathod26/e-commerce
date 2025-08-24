import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BlogHero = ({ blogTitle, imageUrl }) => {
  const [offset1, setOffset1] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset1(window.scrollY / 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: `-${offset1}px`,
            left: 0,
            width: "100%",
            height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt={blogTitle}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{ height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" } }}
        />
      </Box>
      
  );
};

export default BlogHero;
