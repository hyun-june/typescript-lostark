import { styled, Container, backdropClasses } from "@mui/material";

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  flex: 1,
  padding: "24px 0px",
  width: "1500px",

  margin: "0 auto",

  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding: "16px 0",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "8px 0",
  },
}));

export default ResponsiveContainer;
