import {
  Box,
  Typography,
  IconButton,
  Slide,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../theme/themeProvider.jsx";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RollingText from "../microIntractions/RollingText.jsx";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [showNavbar, setShowNavbar] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const menuItems = ["Shop", "Collections", "About", "Blog", "Contacts"];

  return (
    <>
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

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
              }}
            >
              {menuItems.map((label, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                  }}
                >
                  <RollingText text={label} />
                  {["Shop", "Collections"].includes(label) && <AddIcon />}
                </Box>
              ))}
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {!isMobile && (
              <>
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    transition: "transform 0.5s ease-in-out",
                    transform:
                      mode === "dark" ? "rotate(360deg)" : "rotate(0deg)",
                  }}
                >
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
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
              </>
            )}

            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Slide>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">(LOGO)</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: "secondary.contrastText" }} />
            </IconButton>
          </Box>

          {menuItems.map((label, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
              }}
            >
              <Typography variant="body1">{label}</Typography>
              {["Shop", "Collections"].includes(label) && <AddIcon />}
            </Box>
          ))}

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                transition: "transform 0.5s ease-in-out",
                transform: mode === "dark" ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
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
      </Drawer>
    </>
  );
};

export default NavBar;
