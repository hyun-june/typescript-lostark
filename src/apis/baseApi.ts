import axios from "axios";
import { API_KEY, API_KEY_SUB } from "../configs/apiConfig";

export const instance = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer ${API_KEY}`,
    Accept: "application/json",
  },
});

export const instance2 = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer ${API_KEY_SUB}`,
    Accept: "application/json",
  },
});
