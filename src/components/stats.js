import React, { useContext } from 'react';
import useTypingGame, { CharStateType } from 'react-typing-game-hook';

import Race from '../components/instructions';

const Stats = () => {

    const {
        states: { errorChar, correctChar, endTime, startTime, length },
        actions: { insertTyping, resetTyping, deleteTyping },
    } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

    return (
        <>
            <h4 className="stats">Errors: {errorChar}</h4>
            <h4 className="stats">Time taken: {Math.floor((endTime - startTime) / 1000)} seconds</h4>
            <h4 className="stats">WPM: {Math.floor(length/Math.floor((endTime - startTime) / 1000 / 60))}</h4>
            <h4 className="stats">Accuracy: {Math.floor((1 - (errorChar/(errorChar + correctChar))) * 100)}%</h4>
        </>
    )

    
}

export default Stats;