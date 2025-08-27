import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { useRef } from "react";
import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";

const Blog = () => {
  const { blogTitle } = useParams();
  const formattedTitle = blogTitle.replace(/-/g, " "); // convert slug back to title
  const blog = blogs.find(
    (b) => b.blogTitle.toLowerCase() === formattedTitle.toLowerCase()
  );

  if (!blog) {
    return <Typography variant="h4">Blog not found!</Typography>;
  }

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Box>
      <BlogHero blogTitle={blog.blogTitle} imageUrl={blog.imageUrl} />
      <BlogContent blog={blog}/>
    </Box>
  );
};

export default Blog;
