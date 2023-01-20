import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Race() {
  const [inputWord, setInputWord] = useState("");

  const change = event => {
    setInputWord(event.target.value);
  }

  const spaceDetect = (e) => {
    if (e.keyCode === 32) {
      // go to next word
      setInputWord("");
    }
  }

  return (
    <>
      <div className="App-header">
        <h1>race here ish</h1>
        <input
        onChange = {change}
        value = {inputWord}
        onKeyDown = {spaceDetect} />
        <h3>{inputWord}</h3>
      </div>
    </>
  );
}

export default Race;
