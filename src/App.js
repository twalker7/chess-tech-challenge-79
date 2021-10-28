import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header> CHESS TECH </header>
      <div className="App-page">
      <div>
        <Board></Board>
        <button className="button"> </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
