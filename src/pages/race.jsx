import React from 'react';
import { useState } from 'react';
import randomWords from 'random-words';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';
import Settings from './settings';

// exported global variable sentence to be used and edited by racetext.js and settings.js
export var sentence = randomWords({ min: 3, max: 10, exactly: 15, join: ' '});
export function setSentence(e) {sentence = e;}

// variable used to decide whether to randomise the text after ending the game
export var randomiseText = true; 
export function setRandomiseText(e) {randomiseText = e;}

// main race page
const Race = () => {

  // variables used to show and hide the instructions and settings components, upon clicking the text to start the game and clicking the settings button respectively
  const [showInstructions, setShowInstructions] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

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
          <button style={{position:"absolute", top:"0", right:"0"}} className="start-button" onClick={() => setShowSettings(false)}>Go back&nbsp;</button>
          <Settings />
        </>
      ) : null}
    </div>
  );
};

export default Race;
