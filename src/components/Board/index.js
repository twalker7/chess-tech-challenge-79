import React from 'react';


import { Card, Button } from 'react-bootstrap';


function Board(){
var respondToClick = ()=>{
  console.log("this button click worked, for starters");
}
  return(
        <div className="board-container"> 
        <h2> Chess Board contents here </h2> 

        <Card className="mb-3" style={{color:"#000"}} > 
            <Card.Img src="https://picsum.photos/200"/>
            <Card.Body>
              <Card.Title>
                Console for Chess Puzzle stats will go here 
              </Card.Title>
            
              
            <Button variant="primary" id="target" onClick={respondToClick}> Puzzle Book Navigation Button </Button> 
            </Card.Body>
          </Card>
        </div>
    )
 
}

export default Board;