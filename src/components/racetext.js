import React from 'react';
import useTypingGame, { CharStateType, PhaseType } from 'react-typing-game-hook';
import randomWords from 'random-words';
import { sentence, setSentence } from '../pages/race';

// main typing component
const RaceText = () => { 

    // from hook
    const {
        states: { chars, charsState, errorChar, correctChar, endTime, startTime, length, phase },
        actions: { insertTyping, resetTyping, deleteTyping },
    } = useTypingGame(sentence);

    return (
        <>
            <h1 className="text"
            onKeyDown = {e => {
            e.preventDefault();
            const key = e.key;
            if (key === 'Escape') {
                if (phase === PhaseType.Ended) {
                    setSentence(
                        randomWords({ min: 3, max: 10, exactly: sentence.split(" ").length, join: ' '}) // randomise sentence to one of the same length when game ends and user restarts
                    );
                    resetTyping();
                    return;
                }
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
            {chars.split('').map((char, index) => { // map each character to a span
                var state = charsState[index];
                var color = state === CharStateType.Incomplete ? 'white' : state === CharStateType.Correct ? '#90EE90' : 'red'; // green for correct, red for incorrect, white for incomplete
                return (
                <span key = {char + index} style = {{ color }}>
                    {char}
                </span>
                );
            })}
            </h1>
            <div>
                {phase === PhaseType.Ended && startTime && endTime ? ( // show stats when game ends
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
