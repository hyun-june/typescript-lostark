import { Box, styled, Typography } from "@mui/material";

const CategoryBox = styled(Box)({
  border: "1px solid #fff",
  borderRadius: "10px",
  padding: "0.1em 0.3em",
  textAlign: "center",
});

const CategoryForm = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "0.5em",
        alignItems: "center",
        marginBottom: "0.5em",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <CategoryBox>{label}</CategoryBox>
      <Typography>{value}</Typography>
    </Box>
  );
};

const CharacterInfoForm = ({ ...props }) => {
  const { server, itemAvgLevel, combatPower } = props;
  const characterData = {
    서버: server,
    레벨: itemAvgLevel,
    전투력: combatPower,
  };

  return (
    <Box>
      {Object.entries(characterData).map(([label, value]) => (
        <CategoryForm label={label} value={value} />
      ))}
    </Box>
  );
};

export default CharacterInfoForm;
