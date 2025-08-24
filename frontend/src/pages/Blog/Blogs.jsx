import BlogCards from "./BlogCards";
import { blogs } from "./blogs";
import { Box, Typography } from "@mui/material";

const Blog = () => {
  return (
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
      <Box sx={{ my: 4, p: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h1" fontStyle="italic">
          Blog
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          p: 2,
        }}
      >
        {blogs.map((blog, index) => (
          <BlogCards
            key={index}
            imageUrl={blog.imageUrl}
            blogTitle={blog.blogTitle}
            category={blog.category}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
