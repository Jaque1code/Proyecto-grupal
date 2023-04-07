import React from 'react'
import { Col, Form, ListGroup, Row, Button } from 'react-bootstrap';
import Galeria from '../components/Galeria';


const Publicaciones = () => {
    return (
 
       <Row>
        <Col md={2} className='filtros'>
           <h4>Filtros</h4>
           <ListGroup>
               <ListGroup.Item>
                 <Form.Contro type="text" placeholder="Buscar por modelo" value=''/>
                 <Button variant='primary' type="submit">Buscar</Button>
               </ListGroup.Item>
               <ListGroup.Item>
                 <Form.Check id="filter2" label="Filter 2" />
               </ListGroup.Item>
               <ListGroup.item>
                 <Form.Check id="filter3" label="Filter 3"/>
              </ListGroup.item> 
           </ListGroup> 
        </Col>
        <Col md={8}>
          <Galeria></Galeria>
        </Col>
       </Row>    

    )
}


export default Publicaciones 