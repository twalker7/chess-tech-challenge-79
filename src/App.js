import './App.css';
import Board from './components/Board';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header> CHESS TECH </header>
      <div className="App-page">
      <div>
        <Board></Board>
        <Button className="button"> button 1 </Button> 
        <Button className="button"> button 2 </Button>
        </div>
      </div>
      
    </div>
  );
}
// add a 'sidebar' component to the App component and give it a float-left .
// explore react bootstrap for more sophisticated page orientation 
export default App;
