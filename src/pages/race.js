import React from 'react';
import useTypingGame, { CharStateType } from 'react-typing-game-hook';

const Race = () => {

  const {
    states: { chars: letter, charsState: letterState },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

  return (
    <div className="race">
      <h1
        onKeyDown={e => {
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
      {letter.split('').map((char, index) => {
        var state = letterState[index];
        var color =
          state === CharStateType.Incomplete ? 'white' : state === CharStateType.Correct ? '#90EE90' : 'red';
        return (
          <span key = {char + index} style = {{ color }}>
            {char}
          </span>
        );
      })}
      </h1>
    </div>
  );
};

export default Race;
