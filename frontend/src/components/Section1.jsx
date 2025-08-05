import { Box, Button, Paper, Typography } from '@mui/material'
import CheckroomIcon from "@mui/icons-material/Checkroom";
import React from 'react'

const Section1 = () => {
  return (
    <Box sx={{ width: "75%", margin: "0 auto", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          my: 8,
        }}
      >
        <Box
          sx={{
            p: 2,
            width: 300,
            height: 200,
            bgcolor: "secondary.main",
            borderRadius: 3,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CheckroomIcon />
          <Typography variant="body1" color="text.primary">
            Product Features
          </Typography>
          <Typography variant="caption" color="text.secondary">
            some interesting details on the feature
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            width: 300,
            height: 200,
            bgcolor: "secondary.main",
            borderRadius: 3,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CheckroomIcon />
          <Typography variant="body1" color="text.primary">
            Product Features
          </Typography>
          <Typography variant="caption" color="text.secondary">
            some interesting details on the feature
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            width: 300,
            height: 200,
            bgcolor: "secondary.main",
            borderRadius: 3,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CheckroomIcon />
          <Typography variant="body1" color="text.primary">
            Product Features
          </Typography>
          <Typography variant="caption" color="text.secondary">
            some interesting details on the feature
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            width: 300,
            height: 200,
            bgcolor: "secondary.main",
            borderRadius: 3,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CheckroomIcon />
          <Typography variant="body1" color="text.primary">
            Product Features
          </Typography>
          <Typography variant="caption" color="text.secondary">
            some interesting details on the feature
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 12}}>
        <Typography variant="h4" color="inherit" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          consequuntur.
        </Typography>
      </Box>
      <Box sx={{ my: 12}}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant='contained'>filter</Button>
          <Button variant='contained'>filter</Button>
          <Button variant='contained'>filter</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1
