import { Box, Typography, IconButton, Slide } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { useThemeContext } from "../theme/themeProvider.jsx";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const NavBar = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Slide direction="down" in={showNavbar} timeout={300}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: "2vw",
          width: "96vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          my: 3,
          p: 1.5,
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          borderRadius: 4,
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" color="inherit">
            (LOGO)
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          {["Shop", "Collections", "About", "Blog", "Contacts"].map(
            (label, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                }}
              >
                <Typography variant="body1" color="inherit">
                  {label}
                </Typography>
                {["Shop", "Collections"].includes(label) && <AddIcon />}
              </Box>
            )
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )
            }
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Slide>
  );
};

export default NavBar;
