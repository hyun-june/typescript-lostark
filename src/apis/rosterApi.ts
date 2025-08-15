import { CharacterInfo } from "../models/Character";
import { instance } from "./baseApi";

export const getRoster = async (nickname: string): Promise<CharacterInfo> => {
  try {
    const response = await instance.get(`/characters/${nickname}/siblings`);
    return response.data;
  } catch (error) {
    throw new Error("Fail to load Roster");
  }
};
