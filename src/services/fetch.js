import { BASE_URL } from "../utils/constants";
import axios from "axios";
export const API_KEY = 'c935612ad3ic89vi9bi0';


export const customFetch = async ({ apiEndpoint, method = "GET", data }) => {
  const response = await axios.get(`${BASE_URL}/${apiEndpoint}`, {
    params: {
      token: API_KEY
    },
  });
  return response.json();
};
