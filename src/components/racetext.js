import React from 'react';
import { useState } from 'react';
import useTypingGame, { CharStateType, PhaseType } from 'react-typing-game-hook';

const RaceText = ( { sentence } ) => { //prop used to facilitate the use of different sentences

    const {
        states: { chars, charsState, errorChar, correctChar, endTime, startTime, length, phase },
        actions: { insertTyping, resetTyping, deleteTyping },
    } = useTypingGame(sentence);

    return (
        <>
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
                var color = state === CharStateType.Incomplete ? 'white' : state === CharStateType.Correct ? '#90EE90' : 'red';
                return (
                <span key = {char + index} style = {{ color }}>
                    {char}
                </span>
                );
            })}
            </h1>
            <div>
                {phase === PhaseType.Ended && startTime && endTime ? (
                    <>
                        <h4 className="stats">Errors: {errorChar}</h4>
                        <h4 className="stats">Time taken: {Math.floor((endTime - startTime) / 1000)} seconds</h4>
                        <h4 className="stats">WPM: {Math.round(((60 / Math.floor((endTime - startTime) / 1000)) * correctChar) / 5)}</h4>
                        <h4 className="stats">Accuracy: {Math.floor((correctChar / sentence.length) * 100).toFixed(2)}%</h4>
                        <h3>Nice! Press Escape to try again.</h3>    
                    </>
                ) : null}
            </div>
        </>
    )
}

export default RaceText;