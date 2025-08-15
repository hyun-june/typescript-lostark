import { Box, Container, styled, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "./../../theme";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const NavWrapper = styled(Box)({
  position: "relative",

  "&:after": {
    width: "100%",
    content: '""',
    display: "block",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "2px",
    backgroundColor: "#f5f5f5",
  },
});

const NavSection = styled(Container)({
  padding: "1em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const NavSearch = styled(Box)({
  display: "flex",
  position: "relative",
  alignItems: "center",
});

const NavInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "30px",

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputBase-input": {
    padding: "0 15px",
    height: "30px",
    borderRadius: "20px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    width: "300px",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: `0 0 0px 1000px white inset`,
    WebkitTextFillColor: theme.palette.text.secondary,
    backgroundColor: "white",
    padding: "0 15px",
    height: "30px",
    borderRadius: "20px",
  },
}));

const Navbar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (keyword: string) => {
    const cleanKeyword = keyword.replaceAll(" ", "");
    navigate(`/char?charName=${cleanKeyword}`);
  };

  return (
    <NavWrapper>
      <NavSection>
        <Typography
          variant="h2"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          LOLO
        </Typography>
        <NavSearch>
          <NavInput
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(keyword);
            }}
          />
          <SearchIcon
            style={{
              position: "absolute",
              right: "10px",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => handleSearch(keyword)}
          />
        </NavSearch>
      </NavSection>
    </NavWrapper>
  );
};

export default Navbar;
