import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCards = ({ imageUrl, blogTitle, category }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/blog/${blogTitle.replace(/\s+/g, "-").toLowerCase()}`)} 
    >
      <Box sx={{ width: "100%", mb: 2 }}>
        <Box
          component="img"
          src={imageUrl}
          alt={blogTitle}
          sx={{ width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="h5">{blogTitle}</Typography>
        <Typography variant="subtitle2" color="textPrimary">
          Read Article
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCards;
