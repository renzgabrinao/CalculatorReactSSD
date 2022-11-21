import React, { useState, useEffect } from 'react'
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { calculatorButtons } from "./components/calculator-base-button-data";


function App() {

  const [input, setInput] = useState("")

  useEffect(() => {
    console.log(input)
  }, [input])

  const handleClick = (value) => {
    setInput(() => {
      return value
    })
    // console.log(input)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='title'><h1>Calculator</h1></div>
        <Display input={input}/>
        <div className='buttonBox'>        
          {
            calculatorButtons.map((x, key) => {
              return (
                <Button
                  key={key}
                  className={x.className}
                  value={x.value}
                  text={x.text}
                  type={x.type}
                  onClick={() => {handleClick(x.value)}}
                />
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
