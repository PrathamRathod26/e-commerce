import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { blogs } from "./blogs";
import BlogHero from "./BlogHero";
import React from "react";

const Blog = () => {
  const { blogTitle } = useParams();
  const formattedTitle = blogTitle.replace(/-/g, " "); // convert slug back to title
  const blog = blogs.find(
    (b) => b.blogTitle.toLowerCase() === formattedTitle.toLowerCase()
  );

  if (!blog) {
    return <Typography variant="h4">Blog not found!</Typography>;
  }

  return (
    <Box>
      <BlogHero blogTitle={blog.blogTitle} imageUrl={blog.imageUrl} />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          mt: { xs: -28, sm: -26, md: -26 },
          mb: { xs: 0, sm: 13 },
          px: 8,
        }}
      >
        <Typography variant="h2" color="white">
          {blog.blogTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          willChange: "transform",
          bgcolor: "background.default",
          py: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Paper sx={{ width: "55vw", mx: "auto", p: 4, borderRadius: 4 }} elevation={2}>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {blog.category} • {blog.date} • {blog.readingTime}
          </Typography>
          {blog.subHeadings.map((heading, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {blog.contents[index]}
              </Typography>
            </Box>
          ))}
        </Paper>
        <Paper sx={{ width: "55vw", mx: "auto", p: 4, borderRadius: 4 }} elevation={2}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Conclusion
            </Typography>
            <Typography variant="body1">{blog.conclusion}</Typography>
          </Box>
          {/* Author */}
          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Typography variant="subtitle2" color="textSecondary">
              Written by {blog.author}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Blog;
