import React from 'react';
import { useState } from 'react';
import randomWords from 'random-words';
import { setSentence } from '../pages/race'

const Settings = () => {

  const [tempsentence, settempsentence] = useState(""); // used to fix issue of not being able to type in the custom text input, and to update global variable

  return (
    <>
      <div>
        <h1>Settings</h1>
      </div>
      <button style={{width: "150px", margin: "10px"}} className='start-button' onClick={() => setSentence(randomWords({ min: 3, max: 10, exactly: 15, join: ' '}))}>15 Words</button>
      <button style={{width: "150px", margin: "10px"}} className='start-button' onClick={() => setSentence(randomWords({ min: 3, max: 10, exactly: 30, join: ' '}))}>30 Words</button>
      <button style={{width: "150px", margin: "10px"}} className='start-button' onClick={() => setSentence(randomWords({ min: 3, max: 10, exactly: 50, join: ' '}))}>50 Words</button>
      <form>
        <label>
          Custom text:
          <input className='custom-input' type="text" value={tempsentence} onChange={(e) => settempsentence(e.target.value)} />
        </label>
      </form>
      <button style={{width: "190px", margin: "30px"}} className='start-button' onClick={() => setSentence(tempsentence)}>Submit Custom Text</button>
    </>
  );
}

export default Settings;

//TODO: move inline css to App.css
