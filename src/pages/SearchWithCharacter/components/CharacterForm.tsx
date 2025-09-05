import { Box, Grid, styled, Typography } from "@mui/material";
import CharacterItemForm from "./CharacterItemForm";
import CharacterInfoForm from "./CharacterInfoForm";

const CharacterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

const CharacterEquipment = styled(Box)({});

const CharacterGrid = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "0.5fr 1fr",
  gap: "1rem",
});

const CharacterClassTag = styled(Typography)({
  alignSelf: "flex-end",
  color: "#EDEDED",
  fontSize: "1.2em",
});

const CharacterForm = ({ ...props }) => {
  const { data, equipment } = props;
  // console.log("🚀 ~ CharacterForm ~ data:", data);

  const CharacterInfo = styled(Box)({
    // display: "flex",
    backgroundColor: "#15181d",
    padding: "1em",

    // gap: "1em",
    // justifyContent: "space-between",
    backgroundImage: `url(${data?.CharacterImage})`,
    minHeight: "500px",
    minWidth: "500px",
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
  });

  const tooltipData = equipment?.[0]?.Tooltip
    ? JSON.parse(equipment?.[0]?.Tooltip)
    : null;
  // console.log("🚀 ~ CharacterForm ~ test:", tooltipData);
  console.log("🚀 ~ CharacterForm ~ equipment:", equipment);

  return (
    <CharacterBox>
      <Box sx={{ display: "flex", gap: "0.5em" }}>
        <Typography variant="h2" sx={{ color: "white" }}>
          {data?.CharacterName}
        </Typography>
        <CharacterClassTag># {data?.CharacterClassName}</CharacterClassTag>
      </Box>
      <CharacterGrid>
        <CharacterInfo>
          <Box>
            {/* <Typography>서버: {data?.ServerName}</Typography>
            <Typography>아이템: {data?.ItemAvgLevel}</Typography>
            <Typography>전투력: {data?.CombatPower}</Typography> */}
            <CharacterInfoForm
              server={data?.ServerName}
              itemAvgLevel={data?.ItemAvgLevel}
              combatPower={data?.CombatPower}
            />
          </Box>

          {/* <img src={data?.CharacterImage} alt="" style={{ width: "180px" }} /> */}
        </CharacterInfo>
        <CharacterEquipment>
          {/* <Box>
            <img src={equipment?.[0]?.Icon} alt="" />
          </Box> */}
          <CharacterItemForm
            icon={equipment?.[0].Icon}
            name={equipment?.[0].Name}
            tooltip={tooltipData}
          />
        </CharacterEquipment>
      </CharacterGrid>
    </CharacterBox>
  );
};

export default CharacterForm;
