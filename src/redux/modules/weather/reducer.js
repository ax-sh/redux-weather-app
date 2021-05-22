const initialState = {
  userLocationPermission: null,
  status: null,
  location: { lat: null, lon: null },
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_DATA":
      return { ...state, params: action.payload };
    case "SET_USER_LOCATION_PERMISSION":
      return { ...state, userLocationPermission: action.payload };

    default:
      return state;
  }
};
export default weather;
