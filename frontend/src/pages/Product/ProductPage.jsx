import { Box, Typography, Paper, Button } from "@mui/material";
import { product, products } from "../../data/product.js";
import { useState } from "react";

import CheckroomIcon from "@mui/icons-material/Checkroom";

import InfoExpandableCard from "./InfoExpandableCard.jsx";
import FeatureCard from "../../components/FeatureCard.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProductCard from "../../components/ProductCard.jsx";

const features = Array(4).fill({
  icon: <CheckroomIcon fontSize="large" />,
  title: "Product Features",
  description: "Some interesting details on the feature.",
});

const ProductPage = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        px: 2,
        my: 8,
      }}
    >
      <Box sx={{ mt: 4, py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 5 }}
          >
            {product.img.map((img, index) => (
              <Box
                component="img"
                src={img}
                key={index}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Box>

          <ProductDetails product={product} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 2,
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
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" color="textPrimary" textAlign="center">
          FAQs
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {product.faqs.map(([question, answer]) => (
            <InfoExpandableCard
              key={question}
              infoTitle={question}
              infoText={answer}
              isOpen={openCard === question}
              onToggle={() =>
                setOpenCard(openCard === question ? null : question)
              }
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductPage;
