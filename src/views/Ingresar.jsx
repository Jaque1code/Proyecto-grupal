import { Container } from 'react-bootstrap';
import React, { useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style.css";

function Ingresar() {

    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("")
    const [conectado, setConectado] = useState(false);

    function validarPassword(e) {
       e.preventDefault();
       if (clave === '12345'){
           setConectado(true);
       }
    }

  return (

   <Container className='formIngresar'>  
  
    <h1>Login</h1>
    <Form className='contenidoFormIngresar'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" name='correo' placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="clave" placeholder="Password" onChange={(e) => setClave(e.target.value)}/>
      </Form.Group>
      <div className='btnFormIngresar'>
         <Button className='btnIngresar' type="submit">
           Ingresar
         </Button>
         <Button className='btnIngresar' variant="primary"  type="submit" onClick={(e) =>  validarPassword(e.target.value)}>
           Ingresar con Gmail
        </Button>
      </div>
     </Form>
    </Container> 
  );
}

export default Ingresar;