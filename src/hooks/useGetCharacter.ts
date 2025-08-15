import { useQuery } from "@tanstack/react-query";
import { getCharacterProfile } from "../apis/charactersApi";

export const useGetCharactersProfiles = (nickname: string) => {
  return useQuery({
    queryKey: ["character-profile", nickname],
    queryFn: () => {
      return getCharacterProfile(nickname);
    },
    enabled: !!nickname,
  });
};
