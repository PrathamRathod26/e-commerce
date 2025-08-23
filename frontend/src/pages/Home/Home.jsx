import { Box } from "@mui/material";
import HeroSection from "./HomeComponents/HeroSection";
import Section1 from "./HomeComponents/Section1";
import Section2 from "./HomeComponents/Section2";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" } }}/>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          willChange: "transform",
          bgcolor: "background.default",
          py: 4,
        }}
      >
        <Box
          sx={{
            width: "85vw",
            mx: "auto",
            my: 4,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Section1 />
          <Section2 />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
