import React, { useState, useEffect } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(() => {
    document.title = clickArray.length;
  });

  const handleClick = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());
    setClickArray(newClickArray);
    // this.setState({ clickArray: newClickArray })
  }

  return (
    <div>
      <h1>React e <em>Function Components</em></h1>
      <button onClick={handleClick}>Clique aqui</button>
      <ul>{clickArray.map(item => {
        return <li key={Math.random()}>{item}</li>
      })}</ul>
    </div>
  );
}