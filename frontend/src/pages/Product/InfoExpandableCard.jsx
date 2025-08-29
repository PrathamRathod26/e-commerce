import { useState } from "react";
import { Paper, Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InfoExpandableCard = ({ infoTitle, infoText, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const contentId = `info-content-${infoTitle
    ?.toString()
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  const toggle = () => setOpen((p) => !p);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Paper
      elevation={open ? 4 : 1}
      sx={{
        borderRadius: 3,
        p: 1.5,
        bgcolor: open ? "grey.50" : "background.paper",
        border: "1px solid",
        borderColor: open ? "primary.main" : "grey.300",
        transition: (theme) =>
          theme.transitions.create(
            ["background-color", "box-shadow", "border-color"],
            {
              duration: theme.transitions.duration.shortest,
            }
          ),
      }}
    >
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={toggle}
        onKeyDown={onKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          py: 1,
          cursor: "pointer",
          userSelect: "none",
          "&:hover": {
            bgcolor: "grey.100",
          },
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            color: open ? "primary.main" : "text.primary",
            transition: "color 0.3s ease",
          }}
        >
          {infoTitle}
        </Typography>

        <IconButton
          size="small"
          aria-label={open ? "Collapse" : "Expand"}
          sx={{
            transition: (theme) =>
              theme.transitions.create("transform", {
                duration: theme.transitions.duration.short,
              }),
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "primary.main" : "text.secondary",
          }}
        >
          {open ? (
            <RemoveIcon fontSize="small" />
          ) : (
            <AddIcon fontSize="small" />
          )}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box
          id={contentId}
          sx={{
            px: 1,
            pt: 0.5,
            pb: 1.5,
            borderTop: "1px solid",
            borderColor: "grey.200",
            mt: 0.5,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            {infoText}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default InfoExpandableCard;
