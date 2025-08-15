import { Box, styled, Typography } from "@mui/material";
import CharProfileBox from "./CharProfileBox";

const RunCardContainer = styled(Box)({
  border: "1px solid white",
  borderRadius: "5px",
  padding: "10px 6px",
  marginBottom: "1em",
});

const CharContainer = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
});

const FirstClearRunCard = ({
  teamName,
  members,
}: {
  teamName: string;
  members: string[];
}) => {
  //   console.log("🚀 ~ FirstClearRunCard ~ members:", members);
  //   console.log("🚀 ~ FirstClearRunCard ~ teamName:", teamName);

  return (
    <RunCardContainer>
      <Typography variant="h2" sx={{ marginBottom: "0.5em" }}>
        {teamName}
      </Typography>
      <CharContainer>
        {members.map((member, index) => {
          return <CharProfileBox char={member} key={index} />;
        })}
      </CharContainer>
    </RunCardContainer>
  );
};

export default FirstClearRunCard;
