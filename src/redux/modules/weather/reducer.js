import actions from "./actions";

const initialState = {
  userLocationPermission: null,
  status: null,
  location: { lat: null, lon: null },
  loading: true,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actions.WEATHER_DATA_REQUEST:
      return { ...state, status: "loading" };
    case actions.WEATHER_DATA_SUCCESS:
      return { ...state, status: "success", weather: action.payload };
    case actions.WEATHER_DATA_FAILURE:
      return { ...state, status: "failure", error: action.payload };
    case "SET_USER_LOCATION_PERMISSION":
      return { ...state, userLocationPermission: action.payload };
    default:
      return state;
  }
};
export default weather;
