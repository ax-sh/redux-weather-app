import React from "react";
import "./App.scss";
import { askLocationPermission } from "../utils";

function App() {
  const [location, setLocation] = React.useState({ lat: null, lon: null });

  React.useEffect(() => {
    askLocationPermission();
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
