import React from 'react';
import useTypingGame, { CharStateType } from 'react-typing-game-hook';

class Instructions extends React.Component {

  state = { showing: true };

  render() {
    const { showing } = this.state;
    return (
      <div tabIndex={0} onMouseDown={() => this.setState({ showing: !showing })}>
        { showing 
          ? 
            <>
              <h4 className='stats'>Press ESC to restart</h4>
              <h4 className='stats'>Press Backspace to delete</h4>
              <h4 className='stats'>Just click the text and start typing!</h4>
            </>
          : null
        }
      </div>  
    )
  }
}

class endStats extends React.Component {
  // TODO: make wpm appear at end?
}

const Race = () => {

  const {
    states: { chars, charsState, errorChar, correctChar, endTime, startTime, length },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

  return (
    <div className="race">
      <div autoFocus>
        <Instructions></Instructions>
      </div>
      <h1
        onKeyDown = {e => {
          e.preventDefault();
          const key = e.key;
          if (key === 'Escape') {
            resetTyping();
            return;
          }
          if (key === 'Backspace') {
            deleteTyping(false);
            return;
          }
          if (key.length === 1) {
            insertTyping(key);
          }
        }}
      tabIndex={0}
      >
      {chars.split('').map((char, index) => {
        var state = charsState[index];
        var color =
          state === CharStateType.Incomplete ? 'white' : state === CharStateType.Correct ? '#90EE90' : 'red';
        return (
          <span key = {char + index} style = {{ color }}>
            {char}
          </span>
        );
      })}
      </h1>
      <h4 className="stats">Errors: {errorChar}</h4>
      <h4 className="stats">Time taken: {Math.floor((endTime - startTime) / 1000)} seconds</h4>
      <h4 className="stats">WPM: {Math.floor(length/Math.floor((endTime - startTime) / 1000 / 60))}</h4>
      <h4 className="stats">Accuracy: {Math.floor((1 - (errorChar/(errorChar + correctChar))) * 100)}%</h4>
    </div>
  );
};

export default Race;
