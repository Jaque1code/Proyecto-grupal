import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "../style.css"


function CardAuto({auto}) {

     const navigate = useNavigate();


     const verDetalle = () => {
          navigate(`/detalle/${auto.id}`)
     }
   
  return (
   <div className='cardAutos'>
    <Card className='card d-flex align-items-center justify-content-center' style={{ width: '18rem', marginTop:'6em' }}>
      <Card.Img variant="top" src={auto.imagen} />
      <Card.Body>
        <Card.Title>{auto.titulo}</Card.Title>
        <Card.Text>
         <ul>
            <li>Año:{auto.ano}</li>
            <li>Kilometraje:{auto.kilometraje}</li>
            <li>Dueños:{auto.duenos}</li>
            <li>Transmision:{auto.transmision}</li>
            <li>Preciso:{auto.precio}</li>
         </ul>
        </Card.Text>
        <Button className='btnDetalle' variant="primary" onClick={()=>verDetalle()}>Detalle</Button>
       </Card.Body>
     </Card>
    </div>
  );
}

export default CardAuto;