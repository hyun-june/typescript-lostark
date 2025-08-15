import { useLocation } from "react-router-dom";
import { useGetRoster } from "../../hooks/useGetRoster";
import { useGetCharactersProfiles } from "../../hooks/useGetCharacter";

const SearchWithCharacter = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword: string = params.get("charName") || "";

  const { data: rosterData } = useGetRoster(keyword);
  const { data: profileData } = useGetCharactersProfiles(keyword);

  return <div>SearchWithCharacter</div>;
};

export default SearchWithCharacter;
