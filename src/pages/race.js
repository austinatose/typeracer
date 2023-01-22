import React from 'react';
import { useState } from 'react';
import useTypingGame from 'react-typing-game-hook';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';

class endStats extends React.Component {
  // TODO: make wpm appear at end?
}



const Race = () => {

  const [show, setShow] = useState(false);

  const {
  } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

  return (
    <div className="race" onClick={() => setShow(true)}>
      { show ? null : <Instructions /> }
      <RaceText />
    </div>
  );
};

export default Race;
