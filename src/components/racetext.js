import React from 'react';
import { useState } from 'react';
import useTypingGame, { CharStateType } from 'react-typing-game-hook';

const RaceText = () => {

    const {
        states: { chars, charsState },
        actions: { insertTyping, resetTyping, deleteTyping },
    } = useTypingGame("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");

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
                var color =
                state === CharStateType.Incomplete ? 'white' : state === CharStateType.Correct ? '#90EE90' : 'red';
                return (
                <span key = {char + index} style = {{ color }}>
                    {char}
                </span>
                );
            })}
            </h1>
        </>
    )
}

export default RaceText;