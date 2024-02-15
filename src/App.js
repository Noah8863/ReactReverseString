import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState("")
  const [reverseValue, setReverseValue] = useState("")
  const [storedValue, setStoredValue] = useState("")
  const [message, setMessage] = useState("")

  function showValue (e){
    const inputValue = e.target.value
    setValue(inputValue)
    const reversedInput = inputValue.split('').reverse().join('')
    setReverseValue(reversedInput)
  }

  const saveToLocalStorage = (input) => {
    localStorage.setItem("inputValue", input);
  };

  const getFromLocalStorage = () => {
    return localStorage.getItem("inputValue");
  };

  // Update storedValue state on component mount to show the last stored value
  useEffect(() => {
    const lastStoredValue = getFromLocalStorage();
    if (lastStoredValue) {
      setStoredValue(lastStoredValue);
    }
  }, []);

  function handleStoreValue() {
    saveToLocalStorage(value);
    setStoredValue(value);
    setMessage("Input stored in local storage!");
    setValue("");
    setReverseValue("");
  }

  function handleRestoreValue() {
    const lastStoredValue = getFromLocalStorage();
    if (lastStoredValue) {
      setValue(lastStoredValue);
      const reversedInput = lastStoredValue.split('').reverse().join('');
      setReverseValue(reversedInput);
      setMessage("Input restored from local storage!");
    } else {
      alert("No stored input found in local storage.");
    }
  }

  return (
    <div className="App">
      <input placeholder="Enter an input" type="text" onChange={showValue}></input>
      <p>Oringal Input: {value}</p>
      <p>Reversed Input: {reverseValue}</p>
      <button onClick={handleStoreValue}>Store</button>
      <button onClick={handleRestoreValue}>Restore</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
