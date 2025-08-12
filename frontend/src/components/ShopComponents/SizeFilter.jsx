import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const sizes = ["Small", "Medium", "Large", "X-Large"];

const SizeFilter = () => {
  const [selected, setSelected] = useState([]);

  const toggleSize = (size) => {
    setSelected((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Size
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
        }}
      >
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selected.includes(size) ? "contained" : "outlined"}
            onClick={() => toggleSize(size)}
            size="small"
            fullWidth
          >
            {size}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SizeFilter;
