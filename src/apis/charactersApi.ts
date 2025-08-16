import { instance, instance2 } from "./baseApi";

const charatersUrl = "/armories/characters";

export const getCharacterProfile = async (nickname: string, index) => {
  const groupIndex = Math.floor(index / 80);
  const mainInstance = groupIndex % 2 === 0 ? instance : instance2;
  try {
    const response = await mainInstance.get(
      `${charatersUrl}/${nickname}/profiles`
    );
    return response.data;
  } catch (error) {
    throw new Error("Fail to load character Profile");
  }
};

export const getCharacterEquipment = async (nickname) => {
  try {
    const response = await instance.get(
      `${charatersUrl}/${nickname}/equipment`
    );
    return response.data;
  } catch (error) {
    throw new Error("Fail to load character Equipment");
  }
};
