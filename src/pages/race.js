import React from 'react';
import { useState } from 'react';
import useTypingGame, { CharStateType } from 'react-typing-game-hook';

import Instructions from '../components/instructions';
import RaceText from '../components/racetext';
import Stats from '../components/stats';

class endStats extends React.Component {
  // TODO: make wpm appear at end?
}



const Race = () => {

  const [show, setShow] = useState(false);

  const {
    states: { errorChar, correctChar, endTime, startTime, length },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

  return (
    <div className="race">
      { show ? <Instructions /> : null }
      <RaceText onClick={() => setShow(true)} />
      <Stats />
    </div>
  );
};

export default Race;
