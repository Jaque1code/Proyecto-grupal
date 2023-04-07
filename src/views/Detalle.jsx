import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal.jsx';
import "../style.css"

const Detalle = () => {
  const { id } = useParams(); 
  

  const { autos } = useContext(ContextoGlobal);  


  const idxAuto = autos.findIndex((a)=> a.id === id);


  
  const autoDetalle = autos[idxAuto];
  console.log(autos[idxAuto]) 

//   const autoDetalle = autos.filter((a) => a.id === id)

  return (
    

      <Card className='cardDetalle'>
        
        <Card.Img variant="top" src={autoDetalle.imagen} />
        
        <Card.Body>
          <Card.Title>{autoDetalle.titulo}</Card.Title>
          <Card.Text>
            <ul>
              <li>Año:{autoDetalle.ano}</li>
              <li>Kilometraje:{autoDetalle.kilometraje}</li>
              <li>Dueños:{autoDetalle.duenos}</li>
              <li>Transmision:{autoDetalle.transmision}</li>
              <li>Preciso:{autoDetalle.precio}</li>
           </ul>
          </Card.Text>
        </Card.Body>
       
       </Card>

  

  )
}

export default Detalle