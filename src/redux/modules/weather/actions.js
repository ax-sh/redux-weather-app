export const WEATHER_DATA_REQUEST = "WEATHER_DATA_REQUEST";
export const WEATHER_DATA_SUCCESS = "WEATHER_DATA_SUCCESS";
export const WEATHER_DATA_FAILURE = "WEATHER_DATA_FAILURE";

export const fetchWeatherData = ({ lat, lon }) => {
  return { type: "FETCH_WEATHER_DATA", payload: { lat, lon } };
};
export const setWeatherDataError = (error) => {
  return { type: WEATHER_DATA_FAILURE, payload: error };
};
export const setWeatherDataSuccess = (payload) => {
  return { type: WEATHER_DATA_SUCCESS, payload };
};
export const setUserLocationPermission = (payload) => {
  return { type: "SET_USER_LOCATION_PERMISSION", payload };
};

export default {
  WEATHER_DATA_FAILURE,
  WEATHER_DATA_SUCCESS,
  WEATHER_DATA_REQUEST,
};
