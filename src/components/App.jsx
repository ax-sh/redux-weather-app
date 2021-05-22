import React from "react";
import "./App.scss";
import { askLocationPermission } from "../utils";
import { toast } from "react-toastify";

function App() {
  const [location, setLocation] = React.useState({ lat: null, lon: null });

  React.useEffect(() => {
    askLocationPermission()
      .then(({ coords }) => {
        const { latitude: lat, longitude: lon } = coords;
        console.log(coords, lat, lon);
        toast.success(`Location access ${coords}`);
      })
      .catch((e) => {
        console.error(e);
        toast.error(`ERROR Location access ${e.state}`);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(location, null, 4)}</pre>
      </header>
    </div>
  );
}

export default App;
