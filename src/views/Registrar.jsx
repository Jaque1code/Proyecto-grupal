import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Registrar = () => {
    return (
      <Container className= 'formIngresar'>

         <h1>Registrar</h1>
         <Form classsName='contenidoFormIngresar'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Nombre</Form.Label>
               <Form.Control type="email" placeholder="Ingrese nombre" />
            </Form.Group>
            <Form.Group className="mb-3" conttrolId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="password" placeholder="Ingrese apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese una contraseña" />
            </Form.Group> 
            <div className='btnFormIngresar'>
                <Button className='btnIngresar' type="submit">
                  Registrar
                </Button>
                <Button>
                  Registrar con Gmail
                </Button> 
            </div>
         </Form>
      </Container>
    )
}

export default Registrar
