import { Box, Typography } from "@mui/material";

const FeatureCard = ({ icon, title, description, value, suffix }) => {
  const showValue = value !== undefined;

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        bgcolor: "secondary.main",
        color: "text.primary",
        borderRadius: 3,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      {showValue ? (
        <Typography variant="h5" color="inherit" fontWeight={"bold"} >
          {value}
          {suffix}
        </Typography>
      ) : (
        <>{icon}</>
      )}
      <Box>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        <Typography variant="caption" color="disabled">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
