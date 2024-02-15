import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [reverseValue, setReverseValue] = useState("");
  const [storedValue, setStoredValue] = useState([]);
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  function showValue(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
    const reversedInput = inputValue.split('').reverse().join('');
    setReverseValue(reversedInput);
  }

  const saveToLocalStorage = (input) => {
    setStoredValue([...storedValue, input]);
  };

  const getFromLocalStorage = () => {
    const lastStoredValue = storedValue.pop();
    setStoredValue([...storedValue]); 
    if(!lastStoredValue){
      setValue("");
      setReverseValue("");
    }
    return lastStoredValue || "";
  };

  useEffect(() => {
    const lastStoredValue = getFromLocalStorage();
    if (lastStoredValue) {
      setValue(lastStoredValue);
      const reversedInput = lastStoredValue.split('').reverse().join('');
      setReverseValue(reversedInput);
    }
  }, []);

  function handleStoreValue() {
    saveToLocalStorage(value);
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
      console.log("Current Index:", storedValue.length);
      setCurrentIndex(storedValue.length);
    } else {
      setMessage("No stored input found in local storage.");
    }
  }

  return (
    <div className="App">
      <input placeholder="Enter an input" type="text" onChange={showValue}></input>
      <p>Original Input: {value}</p>
      <p>Reversed Input: {reverseValue}</p>
      <button onClick={handleStoreValue}>Store</button>
      <button onClick={handleRestoreValue}>Restore</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

