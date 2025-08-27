import { Box, Typography } from '@mui/material'
import React from 'react'
import FeatureCard from '../../components/FeatureCard';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const features = Array(4).fill({
  icon: <CheckroomIcon fontSize="large" />,
  title: "Product Features",
  description: "Some interesting details on the feature.",
});


const ProductFeature = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "strech",
        justifyContent: "center",
        gap: { xs: 4, md: 8 },
        my: { xs: 6, md: 10 },
        mx: "auto",
      }}
    >
      {/* Left Image */}
      <Box sx={{flex: 2,display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="https://placehold.co/400x500"
          sx={{
            flex: 1.2,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 3,
          }}
        />
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 3, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
          }}
          gutterBottom
        >
          Eco-Friendly <br /> Packaging
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 4,
            maxWidth: { xs: "100%", md: "80%" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam,
          laborum delectus enim quasi, deserunt illo aut deleniti incidunt amet
          esse molestiae dolores neque facere, ex eum. Ipsum, mollitia sunt.
        </Typography>

        {/* Features grid */}
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            width: "100%",
            justifyItems: "stretch",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Box>
      </Box>
    </Box>
  );

}

export default ProductFeature
