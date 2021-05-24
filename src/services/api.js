import axios from "axios";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";
const appid = "115de6d2aa2e3eadfef25cc9211db9fe";
const client = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  params: { appid },
});

export const getWeather = ({ lat, lon }) => {
  console.log(lat, lon);
  return client.get("", { params: { lat, lon } });
};

export default { getWeather };
