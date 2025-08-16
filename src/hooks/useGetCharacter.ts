import { useQuery } from "@tanstack/react-query";
import {
  getCharacterEquipment,
  getCharacterProfile,
} from "../apis/charactersApi";

export const useGetCharactersProfiles = (nickname: string) => {
  return useQuery({
    queryKey: ["character-profile", nickname],
    queryFn: () => {
      return getCharacterProfile(nickname);
    },
    enabled: !!nickname,
  });
};

export const useGetCharactersEquipment = (nickname: string) => {
  return useQuery({
    queryKey: ["character-equipment", nickname],
    queryFn: () => {
      return getCharacterEquipment(nickname);
    },
    enabled: !!nickname,
  });
};
