import React from 'react';
import { useState, useEffect } from 'react';
import useTypingGame from 'react-typing-game-hook';
import randomWords from 'random-words';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';
import Settings from './settings';

export var sentence = randomWords({ min: 3, max: 10, exactly: 15, join: ' '});
export function setSentence(e) {
  sentence = e;
}

const Race = () => {

  const [showInstructions, setShowInstructions] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [internalSentence, update] = useState();

  const {
  } = useTypingGame(sentence);

  return (
      <div className='App-header'>
        <button style={{position:"absolute", top:"0", right:"0"}} className="start-button" onClick={() => setShowSettings(true)}>Settings</button>
        {!showSettings ? (
            <div className="race" onClick={() => setShowInstructions(false)}>
              { showInstructions ? <Instructions /> : null }
              <RaceText />
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
