import React from "react";
import { useState } from "react";
import '../css/styles.css';

import Race from "./race"

const App = () => {

  const [toggleStart, setToggleStart] = useState(false); // variable used to show the race component and hide the home component when the user clicks the start button

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
