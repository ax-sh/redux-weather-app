import { call, put, all, takeLatest } from "redux-saga/effects";
import { askLocationPermission } from "../../../utils";
import {
  WEATHER_DATA_REQUEST,
  setWeatherDataError,
  setWeatherDataSuccess,
} from "./actions";

import { getWeather } from "../../../services/api";

function* fetchWeatherData({ payload }) {
  yield put({ type: WEATHER_DATA_REQUEST });
  try {
    const { data: weather } = yield call(getWeather, payload);
    yield put(setWeatherDataSuccess(weather));
  } catch (e) {
    yield put(setWeatherDataError("Error loading data from the server"));
  }
}

export default all([takeLatest("FETCH_WEATHER_DATA", fetchWeatherData)]);
