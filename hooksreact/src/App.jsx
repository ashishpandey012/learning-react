import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) ;


  // let counter = 5;

  const addValue = () => {
    if (counter <= 19) {
      counter = counter + 1;
    }
    setCounter(counter);
  }

  const removeValue = () =>{
    if (counter >= 1){
      counter = counter - 1;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Hello Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      
      <button onClick={addValue}>Add Value: {counter}</button>
    <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
