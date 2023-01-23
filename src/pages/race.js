import React from 'react';
import { useState } from 'react';
import useTypingGame from 'react-typing-game-hook';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';
import Settings from './settings';

const sentence = "The quick brown fox jumps over the lazy dog.";

const Race = () => {

  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const {
  } = useTypingGame(sentence);

  return (
    <>
      <div className='App-header'>
        {!showSettings ? (
            <div className="race" onClick={() => setShowInstructions(true)}>
              { showInstructions ? null : <Instructions /> }
              <RaceText sentence={sentence}/>
            </div>
        ) : null}
      </div>
      {showSettings ? <Settings /> : null}
    </>
  );
};

export default Race;
