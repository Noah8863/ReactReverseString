import React, { useState } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState("")
  const [storedValue, setStoredValue] = useState("")

  function showValue (e){
    const inputValue = e.target.value
    setValue(inputValue)
    const reversedInput = inputValue.split('').reverse().join('')
    setStoredValue(reversedInput)
  }

  return (
    <div className="App">
      <input placeholder="Enter a input" type="text" onChange={showValue}></input>
      <p>Oringal Input: {value}</p>
      <p>Reversed Input: {storedValue}</p>
      <button>Store</button>
      <button>Restore</button>
    </div>
  );
}

export default App;
