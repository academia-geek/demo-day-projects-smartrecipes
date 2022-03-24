import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const CardMenu = ({ data }) => {

  let sliceProducto = {};

  sliceProducto = data.slice(0, 4)
  console.log('slice',sliceProducto);

  return (
    <div className='cardTitle' >
      <h4> Comparación de precios</h4>
      <Row xs={1} md={4} className="g-3">
        {
          sliceProducto.map(producto => (
            <Col key={producto.id} className='cardMenu'>
              <Card style={{ width: '11rem'}} className='mx-auto' >
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text>{producto.price}</Card.Text>
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