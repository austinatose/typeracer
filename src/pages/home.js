import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="App-header">
        <h1>typeracer</h1>
        <button onClick={() => navigate("/race")}>Click me to start</button>
      </header>
    </div>
  );
}

export default Home;