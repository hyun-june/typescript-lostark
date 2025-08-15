import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <>
      {isLoading && (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="3rem" sx={{ color: "#ffc030" }} />
        </Box>
      )}
    </>
  );
};

export default LoadingSpinner;
