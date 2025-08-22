import { Box, Grid, styled, Typography } from "@mui/material";
import CharacterItemForm from "./CharacterItemForm";

const CharacterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

const CharacterInfo = styled(Box)({
  display: "flex",
  backgroundColor: "#15181d",
});

const CharacterEquipment = styled(Box)({});

const CharacterGrid = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "0.5fr 1fr",
  gap: "1rem",
});

const CharacterForm = ({ ...props }) => {
  const { data, equipment } = props;
  // console.log("🚀 ~ CharacterForm ~ data:", data);

  const tooltipData = equipment?.[0]?.Tooltip
    ? JSON.parse(equipment?.[0]?.Tooltip)
    : null;
  // console.log("🚀 ~ CharacterForm ~ test:", tooltipData);
  console.log("🚀 ~ CharacterForm ~ equipment:", equipment);

  return (
    <CharacterBox>
      <Typography variant="h2" sx={{ color: "white" }}>
        {data?.CharacterName}
      </Typography>
      <CharacterGrid>
        <CharacterInfo>
          <Box>
            <Typography>서버: {data?.ServerName}</Typography>
            <Typography>클래스: {data?.CharacterClassName}</Typography>
            <Typography>아이템: {data?.ItemAvgLevel}</Typography>
            <Typography>전투력: {data?.CombatPower}</Typography>
          </Box>
          <img src={data?.CharacterImage} alt="" style={{ width: "200px" }} />
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
