import React from "react";

import { Card } from "react-bootstrap";

const AlmuerzoCard = ({ dish }) => {
  return (
    <div key={`dish`}>
      <Card className="container-card">
        {/* <Card.Img variant="top" src={dish.image} className="imagen-menu-card" /> */}
        <Card.Body className="body-menu-card">
          <Card.Title className="title-menu">{dish.title}</Card.Title>
          <ul>
            <li>Tiempo de preparación: {dish.readyInMinutes}</li>
            <li>Tipo de dieta: {dish.diets.join(", ")}</li>
            <li>Precio total: $ {dish.pricePerServing}</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AlmuerzoCard;
