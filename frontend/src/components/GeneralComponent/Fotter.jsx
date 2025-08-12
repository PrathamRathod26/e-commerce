import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import RollingText from "../../microIntractions/RollingText.jsx";
import { useTheme } from "@mui/material/styles";

const Fotter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  const rollingProps = {
    firstTextSx: { color: "text.secondary" },
    secondTextSx: {
      color: "primary.contrastText",
      ".MuiBox-root:hover &": { color: "primary.contrastText" },
    },
  };

  const renderLinks = (title, items) => {
    if (isMobile) {
      return (
        <Accordion
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
            color: "primary.contrastText",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
          >
            <Typography variant="h6">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {items.map((item, i) => (
                <RollingText key={i} text={item} {...rollingProps} />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    } else {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map((item, i) => (
              <RollingText key={i} text={item} {...rollingProps} />
            ))}
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      id="footer-parallax"
      sx={{
        position: {sm: "static", md:"fixed"},
        bottom: 0,
        left: 0,
        height: { sm: "auto", md: 600, lg: 400 },
        width: "100vw",
        display: "flex",
        bgcolor: "primary.dark",
        color: "primary.contrastText",
        my: "auto",
        px: { xs: 2, sm: 4, md: 6 },
        overflowY: { xs: "scroll", sm: "hidden" },
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
        {/* About Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            flex: 1,
            p: 2,
            gap: 2,
          }}
        >
          <Typography variant="h4">About E-commerce</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aut
            nostrum quod dolorum dolores sint eveniet magni asperiores. Vel,
            dicta?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
          </Box>
        </Box>

        {/* Links Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: 3,
            flex: 2,
            p: 2,
            flexWrap: "wrap",
          }}
        >
          {renderLinks("Pages", [
            "Home",
            "About",
            "Shop",
            "Shop Single",
            "Blog",
            "Blog Single",
            "404",
            "Licencing",
          ])}

          {isMobile ? (
            renderLinks("Categories & Account", [
              "All products",
              "Cleanser",
              "Lotion",
              "Moistrizers",
              "Favorites",
              "My Account",
            ])
          ) : (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}
            >
              {renderLinks("Categories", [
                "All products",
                "Cleanser",
                "Lotion",
                "Moistrizers",
              ])}
              {renderLinks("Account", ["Favorites", "My Account"])}
            </Box>
          )}

          {renderLinks("Support", [
            "Contacts",
            "FAQs",
            "Shipping & Delivery",
            "Orders and Returns",
            "Terms & Conditions",
          ])}
        </Box>
      </Box>
    </Box>
  );
};

export default Fotter;
