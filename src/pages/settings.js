import React from 'react';
import { sentence, setSentence } from '../pages/race'

const Settings = () => {
  return (
    <>
      <div>
        <h1>Settings</h1>
      </div>
      <button style={{padding: "10px"}} className='start-button' onClick={() => setSentence('WHAT')}> click me to change text</button>
      <button style={{padding: "10px"}} className='start-button' onClick={() => setSentence('bruhh')}> click me to change text</button>
      <button style={{padding: "10px"}} className='start-button' onClick={() => setSentence('WHAawefawfwT')}> click me to change text</button>
      <button style={{padding: "10px"}} className='start-button' onClick={() => setSentence('awefawe')}> click me to change text</button>
    </>
  );
}

export default Settings;
