import React from 'react';


import { Card, Button } from 'react-bootstrap';
function Board(){
    return(
        <div className="board-container"> 
        <h2> Chess Board contents here </h2> 
        <img alt="chess board" src=""/>


        <Card className="mb-3" style={{color:"#000"}} > 
            <Card.Img src="https://picsum.photos/200"/>
            <Card.Body>
              <Card.Title>
                Console for Chess puzzle stats will go here 
              </Card.Title>
            
              
            <Button variant="primary "> Puzzle Book Navigation Button </Button> 
            </Card.Body>
          </Card>
        </div>
    )
}

export default Board;