import React, { useState, useEffect } from 'react'
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import Footer from './components/Footer';
import { calculatorButtons } from "./components/calculator-base-button-data";

let override = false


function App() {

  const [input, setInput] = useState("0")
  const [prevInput, setPrevInput] = useState("")
  const OPERATORS = ["+", "-", "*", "/"]

  useEffect(() => {
    console.log(`Input: ${input}\nPrevInput: ${prevInput}`)
  }, [input, prevInput])

  const handleClick = (button) => {
    if(button.type === "number"){
      handleButtons(button)
    }

    if(button.type === "operator"){
      handleOperators(button)
    }

    if(button.type === "enter" && input !== ""){
      handleEquals(prevInput, input)
    }

    if(button.type === "clear"){
      switch(button.value){
        case "Clear":
          handleClear()
          break;

        case "All Clear":
          setInput("0")
          setPrevInput("")
          override = false
          break;

        default:
          break;  
      }
    }
  }

  const handleButtons = (button) => {
    if(override === true && prevInput === "" ){
      setInput(`${button.value}`)
      setPrevInput("")
      override = !override
    }
    else if(input === "0"){
      setInput(`${button.value}`)
    }
    else{
      setInput((prev) => `${prev}` + button.value)
    }
  }

  const handleOperators = (button) => {
    if(input !== "0" && !OPERATORS.includes(input.at(-1)) && prevInput === ""){
      setPrevInput(() => { return `${input}` + button.value })
      setInput("")
    }
    if(input !== "" && prevInput !== ""){
      let result = Function("return " + prevInput + input)()
      setPrevInput(result.toString()+button.value)
      setInput("")
    }
  }

  const handleEquals = (prevInput, input) => {
    let result = Function("return " + prevInput + input)()
    setPrevInput("")
    setInput(result.toString())
    override = !override
  }

  const handleClear = () => {
    if(input === "" && prevInput !== ""){
      let newInput = prevInput.slice(0, -1)
      setInput(newInput)
      setPrevInput("")
    }
    
    if(input !== "" && prevInput !== ""){
      setInput((prev) => prev.slice(0, -1))
    }

    if(input !== "" && prevInput === ""){
      if(input.length === 1){
        setInput("0")
      }else{
        setInput((prev) => prev.slice(0, -1))
      }
    }
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <div className='title'><h1>Calculator</h1></div>
        <Display input={input} prevInput={prevInput}/>
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
        <Footer />
      </header>
    </div>
  );
}

export default App;
