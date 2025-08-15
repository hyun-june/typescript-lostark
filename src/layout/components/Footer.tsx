import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterContainer = styled(Box)({
  borderTop: "1px solid white",
  padding: "1em",
  display: "flex",
  justifyContent: "center",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        component={Link}
        target="_blank"
        to="https://discordapp.com/users/343019353362661376"
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        discord
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
