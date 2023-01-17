import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate;

  const gotoRace = () => {
    console.log('button clicked');

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>typeracer</h1>
        <button type="button" onClick={gotoRace}>Click me to start</button>
      </header>
    </div>
  );
}
