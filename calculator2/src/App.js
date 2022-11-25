import React, { useState, useEffect } from 'react'
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { calculatorButtons } from "./components/calculator-base-button-data";


function App() {

  const [input, setInput] = useState("0")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  const OPERATORS = ["+", "-", "*", "/"]

  useEffect(() => {
    console.log(`Input: ${input}\nOperator: ${operator}\nResult: ${result}`)
  }, [input, operator, result])

  const handleClick = (button) => {
    console.log(button.type)
    
    if(button.type === "number"){
      if(input === "0"){
        setInput(button.value)
      }else{
        setInput((prev) => `${prev}` + button.value)
      }
    }

    if(button.type === "operator" && !OPERATORS.includes(input.at(-1))){
      setInput((prev) => `${prev}` + button.value)
    }

    if(button.type === "enter"){
      let result;
      if(OPERATORS.includes(input.at(-1))){
        let newInput = input.slice(0,-1)
        result = Function("return " + newInput)
      }else{
        result = Function("return " + input)
      }
      setInput(result)
      setResult(result)
    }

    if(button.type === "clear"){
      let currentInput = input
      if(button.text === "C") {
        currentInput = currentInput.slice(0,-1);
        setInput(currentInput)
      }
      if(button.text === "AC"){
        setInput("0")
        setOperator("")
        setResult("")
      }
    }
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
                  onClick={() => {handleClick(x)}}
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
