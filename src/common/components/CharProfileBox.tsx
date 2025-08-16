import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import theme from "../../theme";
import { CustomProfile } from "../../models/Character";
import { Link } from "react-router-dom";
import estherImg from "../../assets/img/esther.png";
const CharInfoBox = styled(Box)({
  textAlign: "center",
});

const PointColor = styled(Typography)({
  color: "#FA5D00",
});

const CharProfileBox = ({ char }: { char: CustomProfile }) => {
  //   console.log("🚀 ~ CharProfileBox ~ char:", char);
  return (
    <Box>
      <Box
        sx={{ position: "relative", textDecoration: "none", color: "inherit" }}
        component={Link}
        to={`/char?charName=${char?.CharacterName}`}
      >
        <Avatar
          variant="rounded"
          src={char?.CharacterImage}
          alt={char?.CharacterName}
          sx={{ width: "140px", height: "auto" }}
        />

        {char?.esther && (
          <img
            style={{
              width: "30px",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            src={estherImg}
          />
        )}
      </Box>
      <CharInfoBox>
        <Typography
          variant="body1"
          component={Link}
          to={`/char?charName=${char?.CharacterName}`}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          {char?.CharacterName}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Typography>{char?.CharacterClassName}</Typography>
          <Typography>{char?.CombatPower}</Typography>
        </Box>
        {char?.note ? <PointColor>{char?.note}</PointColor> : ""}
      </CharInfoBox>
    </Box>
  );
};

export default CharProfileBox;
