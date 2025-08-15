import { instance } from "./baseApi";

const charatersUrl = "/armories/characters";

export const getCharacterProfile = async (nickname: string) => {
  try {
    const response = await instance.get(`${charatersUrl}/${nickname}/profiles`);
    return response.data;
  } catch (error) {
    throw new Error("Fail to load character Profile");
  }
};
