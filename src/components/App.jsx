import React from "react";
import "./App.scss";
import { askLocationPermission } from "../utils";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchWeatherData,
  setUserLocationPermission,
} from "../redux/modules/weather/actions";

function App() {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const askPermission = () => {
    dispatch(fetchWeatherData({ lat: 5, lon: 4 }));
    askLocationPermission()
      .then(({ coords }) => {
        const { latitude: lat, longitude: lon } = coords;
        console.log(coords, lat, lon);
        toast.success(`Location access ${coords}`);
        dispatch(setUserLocationPermission("granted"));
      })
      .catch((e) => {
        console.error(e);
        toast.error(`ERROR Location access ${e.state}`);
        dispatch(setUserLocationPermission("denied"));
      });
  };

  React.useEffect(askPermission, []);

  const hasPermission = weather.userLocationPermission === "granted";

  return (
    <div className="App">
      <header className="App-header">
        {!hasPermission && (
          <h1>
            Enable location permission to fetch the weather data in your
            location
          </h1>
        )}
        <pre>{JSON.stringify(weather, null, 4)}</pre>
        {/* <WeatherApp data={weather} /> */}
      </header>
    </div>
  );
}

export default App;
