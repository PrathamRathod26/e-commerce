import React from 'react'
import FeatureCard from '../../components/FeatureCard';
import { Box, Typography } from '@mui/material';
import ReviewComment from '../../components/ReviewComment';

const StatsCard = () => {
  return (
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          width: "100%",
          justifyItems: "center",
          my: 2,
        }}
      >
        <FeatureCard
          value={75}
          suffix="%"
          title="Growth"
          description="Yearly Increase"
        />
        <FeatureCard
          value={120}
          suffix="+"
          title="Projects"
          description="Completed Successfully"
        />
        <FeatureCard
          value={15}
          suffix="K+"
          title="Customers"
          description="Happy Clients worldwide"
        />
        <FeatureCard
          value={8}
          suffix="/10"
          title="Rating"
          description="Customer Satisfaction"
        />
      </Box>
  );
}

export default StatsCard;
