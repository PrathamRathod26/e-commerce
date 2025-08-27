import { Box, Typography } from "@mui/material";
import AboutHero from "./AboutHero";
import ReviewComment from "../../components/ReviewComment";
import StatsCard from "./StatsCard";
import Journey from "./Journey";
import ProductFeature from "./ProductFeature";

const About = () => {
  return (
    <Box>
      <AboutHero />
      <Box
        sx={{ height: { xs: "30vh", sm: "50vh", md: "70vh", lg: "100vh" } }}
      />

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
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <StatsCard />
          <ReviewComment
            heading1="Driven By Cars"
            heading2="Rooted by Nature"
            rating={4.7}
            reviewCount={1463}
            userImages={[
              "https://placehold.co/100x100?text=image1",
              "https://placehold.co/100x100?text=image2",
              "https://placehold.co/100x100?text=image3",
            ]}
          />
          <Journey />
          <Box>
            <Typography variant="h4" color="inherit" textAlign={"center"}>
              Natural Beauty.
            </Typography>
            <Typography variant="h4" color="inherit" textAlign={"center"}>
              Sustainable Future.
            </Typography>
            <Typography variant="h4" color="inherit" textAlign={"center"}>
              Effective Skincare.
            </Typography>
            <Typography variant="h6" color="inherit" textAlign={"center"}>
              our Mission
            </Typography>
          </Box>

          <Box
            component="img"
            src="https://placehold.co/1600x900"
            alt="Section 2"
            sx={{
              height: { xs: 400, sm: 500, md: 600 },
              width: "100%",
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
          <ProductFeature />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
