import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

const BlogContent = ({blog}) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        willChange: "transform",
        // bgcolor: "background.default",
        bgcolor: "lightpink",
        py: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Paper
        sx={{
          maxWidth: 900,
          p: 4,
          borderRadius: 4,
          mx: { xs: 2, sm: 4, md: "auto" },
        }}
        elevation={2}
      >
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
      <Paper
        sx={{
          maxWidth: 900,
          p: 4,
          borderRadius: 4,
          mx: { xs: 2, sm: 4, md: "auto" },
        }}
        elevation={2}
      >
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
  );
}

export default BlogContent
