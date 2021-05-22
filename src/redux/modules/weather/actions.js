export const fetchWeatherData = ({ lat, lon }) => {
  return { type: "FETCH_WEATHER_DATA", payload: { lat, lon } };
};
export const setUserLocationPermission = (payload) => {
  return { type: "SET_USER_LOCATION_PERMISSION", payload };
};
