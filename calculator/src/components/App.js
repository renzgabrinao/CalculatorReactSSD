import React, {Component} from 'react';
import './App.css';
import KeyPad from './KeyPad'
import Result from './Result';

class App extends Component{
  state = {
    result: ""
  }


  onClick = button =>{
    if(button === "C"){
      this.reset();
    }
    
    else if(button === "CE"){
      this.backspace();
    }
    else if(button === "="){
    this.calculate();
    }
    else{
      this.setState({
        result: this.state.result + button
      })
    }
    
    render(); {

      return(
        <div className="calculator">
          <div>
          <h1>hjahsjkdasjkd</h1>
          </div>
        </div>
  
      )
    }
  }
}

export default App;
