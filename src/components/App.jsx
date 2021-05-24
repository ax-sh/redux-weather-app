import React from "react";
import "./App.scss";
import { askLocationPermission } from "../utils";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setWeatherDataError } from "../redux/modules/weather/actions";

import {
  fetchWeatherData,
  setUserLocationPermission,
} from "../redux/modules/weather/actions";

const WeatherApp = ({ weather = {} }) => {
  const { current, minutely, hourly, daily, timezone, lat, lon, ...props } =
    weather;
  return (
    <>
      <h2>
        Location {timezone}{" "}
        <small>
          lat: {lat} lon: {lon}
        </small>
      </h2>
      <h1>{current.temp} °C</h1>
      <div>
        <pre>{JSON.stringify(current, null, 4)}</pre>
      </div>
    </>
  );
  return <pre>{JSON.stringify(props, null, 3)}</pre>;
};

function App() {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const askPermission = () => {
    askLocationPermission()
      .then(({ coords }) => {
        const { latitude: lat, longitude: lon } = coords;
        // console.log(coords, lat, lon);
        dispatch(fetchWeatherData({ lat, lon }));
        dispatch(setUserLocationPermission("granted"));
      })
      .catch((e) => {
        dispatch(
          setWeatherDataError("Error User didn't grant location permission.")
        );
        dispatch(setUserLocationPermission("denied"));
      });
  };

  React.useEffect(() => {
    askPermission();
  }, [dispatch]);

  function renderSwitch() {
    switch (weather.status) {
      case "loading":
        return "Loading";
      case "success":
        return <WeatherApp {...weather} />;
      case "failure":
        toast.error(`ERROR: ${weather.error}`);
        return <>ERROR: {weather.error}</>;
      default:
        return "Please Allow Location Permission to run this weather app";
    }
  }

  return (
    <div className="App">
      <header className="App-header">{renderSwitch()}</header>
    </div>
  );
}

export default App;
