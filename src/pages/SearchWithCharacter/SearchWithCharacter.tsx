import { useLocation } from "react-router-dom";
import { useGetRoster } from "../../hooks/useGetRoster";
import {
  useGetCharactersEquipment,
  useGetCharactersProfiles,
} from "../../hooks/useGetCharacter";
import CharacterForm from "./components/CharacterForm";

const SearchWithCharacter = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword: string = params.get("charName") || "";

  // const { data: rosterData } = useGetRoster(keyword);
  const { data: profileData } = useGetCharactersProfiles(keyword);
  const { data: equipmentData } = useGetCharactersEquipment(keyword);
  // console.log("🚀 ~ SearchWithCharacter ~ equipmentData:", equipmentData);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <CharacterForm data={profileData} equipment={equipmentData} />
    </div>
  );
};

export default SearchWithCharacter;
