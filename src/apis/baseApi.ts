import axios from "axios";
import { API_KEY } from "../configs/apiConfig";

export const instance = axios.create({
  baseURL: "https://developer-lostark.game.onstove.com",
  headers: {
    Authorization: `bearer ${API_KEY}`,
    Accept: "application/json",
  },
});
