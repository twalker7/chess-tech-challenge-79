import './App.css';
import Board from './components/Board';


import 'bootstrap/dist/css/bootstrap.min.css'; // major key 
import {Button, Alert, Breadcrumb, Card, Row, Column} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header> CHESS TECH </header>
      <div className="App-page">
      <div>
        <Board> </Board>

      
        <Alert variant="success"> This is an alert button now </Alert>
        <Breadcrumb.Item> First </Breadcrumb.Item> 
        <Breadcrumb.Item> Second </Breadcrumb.Item>
        <Breadcrumb.Item> Third </Breadcrumb.Item>

      

        <Button className="button"> button1 </Button> 
        <Button className="button"> button2 </Button>
        </div>
      </div>
      
    </div>
  );
}
// add a 'sidebar' component to the App component and give it a float-left .
// explore react bootstrap for more sophisticated page orientation 
export default App;
