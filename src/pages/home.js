import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  window.$racetext = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."; 

  return (
    <div>
      <header className = "App-header">
        <h1>typeracer</h1>
        <button onClick = {() => navigate("/race")}>Click me to start</button>
      </header>
    </div>
  );
}

export default Home;