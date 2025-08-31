import { Paper, Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InfoExpandableCard = ({ infoTitle, infoText, isOpen, onToggle }) => {
  const contentId = `info-content-${infoTitle
    ?.toString()
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <Paper
      elevation={isOpen ? 4 : 1}
      sx={{
        borderRadius: 3,
        p: 1.5,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: isOpen ? "primary.main" : "grey.300",
        transition: (theme) =>
          theme.transitions.create(
            ["box-shadow", "border-color"],
            {
              duration: theme.transitions.duration.short,
            }
          ),
      }}
    >
      {/* Header Row */}
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
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
            color: isOpen ? "primary.main" : "text.primary",
            transition: "color 0.3s ease",
          }}
        >
          {infoTitle}
        </Typography>

        <IconButton
          size="small"
          aria-label={isOpen ? "Collapse" : "Expand"}
          sx={{
            transition: (theme) =>
              theme.transitions.create("transform", {
                duration: theme.transitions.duration.short,
              }),
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "primary.main" : "text.secondary",
          }}
        >
          {isOpen ? (
            <RemoveIcon fontSize="small" />
          ) : (
            <AddIcon fontSize="small" />
          )}
        </IconButton>
      </Box>

      {/* Content */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
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
