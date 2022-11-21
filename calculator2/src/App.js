import './App.css';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <Display/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
