import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="App-header">
      <div>
        <header>
          <h1>typeracer</h1>
          <button className="start-button" onClick = {() => navigate("/race")}>Click me to start</button>
        </header>
      </div>
      <div>
        <h3>Made with ❤️ by Austin</h3>
      </div>
    </div>

  );
}

export default Home;