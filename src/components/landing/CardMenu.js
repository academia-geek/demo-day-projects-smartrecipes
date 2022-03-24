import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const CardMenu = ({ data }) => {

  let a = {};

  a = data.slice(0, 4)
  console.log('slice',a);

  return (
    <div className='cardTitle' >
      <h4> Comparación de precios</h4>
      <Row xs={1} md={4} className="g-3">
        {
          a.map(p => (
            <Col key={p.id} className='cardMenu'>
              <Card style={{ width: '11rem'}} className='mx-auto' >
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>{p.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default CardMenu