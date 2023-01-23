import React from 'react';
import { useState } from 'react';
import useTypingGame from 'react-typing-game-hook';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';
import Settings from './settings';

export var sentence = "The quick brown fox jumps over the lazy dog.";
export function setSentence(value) {
  sentence = value;
}

const Race = () => {

  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const {
  } = useTypingGame(sentence);

  return (
      <div className='App-header'>
        <button style={{position:"absolute", top:"0", right:"0"}} className="start-button" onClick={() => setShowSettings(true)}>Settings</button>
        {!showSettings ? (
            <div className="race" onClick={() => setShowInstructions(true)}>
              { showInstructions ? null : <Instructions /> }
              <RaceText sentence={sentence}/>
            </div>
        ) : null}
        {showSettings ? (
        <>
          <button style={{position:"absolute", top:"0", right:"0"}} className="start-button" onClick={() => setShowSettings(false)}>Go back</button>
          <Settings />
        </>
      ) : null}
    </div>
  );
};

export default Race;
