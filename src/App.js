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
// add a 'sidebar' component to the App component and give it a float-left .
// explore react bootstrap for more sophisticated page orientation 
export default App;
