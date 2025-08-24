import React from 'react'
import { Box, Typography, Stack } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const Card = ({ cardTitle, heading, description, points }) => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 6,
        bgcolor: "secondary.main",
        color: "text.primary",
        borderRadius: 3,
      }}
    >
      <Typography variant="caption" color="inherit" fontStyle={"italic"}>
        {cardTitle}
      </Typography>
      <Typography variant="h4" color="inherit" fontWeight="bold" mb={1} mt={2}>
        {heading}
      </Typography>
      <Typography variant="body1" color="inherit">
        {description}
      </Typography>

      <Stack spacing={1} mt={6}>
        {points?.map((point, index) => (
          <Stack direction="row" spacing={1} alignItems="center" key={index}>
            {point.icon}
            <Typography variant="body2" color="inherit">
              {point.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const Journey = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        my: 8,
        mx: "auto",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
        <Box
          component="img"
          src="https://placehold.co/350x400"
          sx={{
            width: "100%",
            borderRadius: 3,
            objectFit: "cover",
            flex: 1,
          }}
        />
        <Card
          cardTitle="Our Journey"
          heading="From Idea to Reality"
          description="Started with a small team and a big dream, today we serve thousands of happy customers worldwide."
          points={[
            {
              icon: <CheckCircleIcon color="success" />,
              text: "Founded in 2021",
            },
            {
              icon: <InsertEmoticonIcon color="warning" />,
              text: "100K+ Happy Customers",
            },
            {
              icon: <LocalShippingIcon color="primary" />,
              text: "10K+ Products Shipped",
            },
          ]}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: {xs: "column-reverse", md: "column"}, gap: 3, flex: 1 }}>
        <Card
          cardTitle="About Us"
          heading="Passion for Excellence"
          description="We are a dedicated team committed to delivering high-quality products and exceptional customer experience."
          points={[
            {
              icon: <PersonIcon color="success" />,
              text: "Customer-first Approach",
            },
            { icon: <StarIcon color="warning" />, text: "Top-rated Service" },
            {
              icon: <EmojiObjectsIcon color="primary" />,
              text: "Innovative Solutions",
            },
          ]}
        />
        <Box
          component="img"
          src="https://placehold.co/350x400"
          sx={{
            width: "100%",
            borderRadius: 3,
            objectFit: "cover",
            flex: 1,
          }}
        />
      </Box>
    </Box>
  );
};
export default Journey
