import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <CircularProgress size="3rem" />
    </Box>
  );
};

export default LoadingSpinner;
