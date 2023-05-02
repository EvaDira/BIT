import './App.css';
import Jokes from './Components/FindJokes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Jokes for you!</h1>
          <Jokes />
        </div>
      </header>
    </div>
  );
}

export default App;
