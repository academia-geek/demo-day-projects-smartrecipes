import React from "react";
import { Card } from "react-bootstrap";

const DesayunoCard = ({ dish }) => {
  console.log(dish)
  return (
    
     <div key={`dish`}> <Card className="container-card">
        {/* <Card.Img variant="top" src={dish.image} className="imagen-menu-card" /> */}
        <Card.Body className="body-menu-card">
          <Card.Title className="title-menu">{dish.title}</Card.Title>
          <Card.Text>
            Preparation Time: {dish.readyInMinutes}'
            <br />
            Diet type: {dish.diets.join(", ")}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>   
     
  )
    }
  


export default DesayunoCard;
