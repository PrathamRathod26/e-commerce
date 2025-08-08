import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import RollingText from "../microIntractions/RollingText.jsx";

const Footer = () => {
  const [offSet, setOffset] = useState(0);
  const rollingProps = {
    firstTextSx: { color: "text.secondary" },
    secondTextSx: {
      color: "primary.contrastText",
      ".MuiBox-root:hover &": { color: "primary.contrastText" },
    },
  };

  useEffect(() => {
    const footer = document.getElementById("footer-parallax");

    const handleScroll = () => {
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollRatio = (windowHeight - rect.top) / windowHeight;
      const clampedRatio = Math.max(0, Math.min(scrollRatio, 1.5));

      setOffset(clampedRatio * -250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="footer-parallax"
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "primary.dark",
        color: "primary.contrastText",
        py: 4,
        px: { xs: 2, sm: 4, md: 6 },
        transform: `translateY(${offSet}px)`,
          willChange: "transform",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          py: 2,
          gap: { xs: 2, sm: 4, lg: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            flex: 1,
            p: 2,
          }}
        >
          <Typography variant="h4">About Chhaap Vastra</Typography>
          <Typography variant="body1">
            Combining nature and science, we create cloths fits you perfectly
            and go well with the current trends.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 3,
            flex: 2,
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="h5" color="inherit">
              Pages
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Home",
                "About",
                "Shop",
                "Shop Single",
                "Blog",
                "Blog Single",
                "404",
                "Licencing",
              ].map((item, i) => (
                <RollingText key={i} text={item} {...rollingProps} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}
          >
            <Box>
              <Typography variant="h5">Categories</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {["All products", "Cleanser", "Lotion", "Moistrizers"].map(
                  (item, i) => (
                    <RollingText key={i} text={item} {...rollingProps} />
                  )
                )}
              </Box>
            </Box>
            <Box>
              <Typography variant="h5">Account</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {["Favorites", "My Account"].map((item, i) => (
                  <RollingText key={i} text={item} {...rollingProps} />
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant="h5">Support</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Contacts",
                "FAQs",
                "Shipping & Delivery",
                "Orders and Returns",
                "Terms & Conditions",
              ].map((item, i) => (
                <RollingText key={i} text={item} {...rollingProps} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
