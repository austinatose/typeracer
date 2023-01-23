import React from "react";
import { useState } from "react";
import './App.css';

import Race from "./pages/race"

const App = () => {

  const [toggleStart, setToggleStart] = useState(false);

  return (
    <div className="App">
      {!toggleStart ? (
        <div className="App-header">
        <div>
          <header>
            <h1>typeracer</h1>
            <button className="start-button" onClick={() => setToggleStart(true)}>Click me to start</button>
          </header>
        </div>
        <div>
          <h3>Made with ❤️ by Austin</h3>
        </div>
      </div>
      ) : null}
      {toggleStart ? <Race /> : null}
    </div>
  );
}

export default App;
