import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Ingresar() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo electronico" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
   
      <Button variant="primary" type="submit">
         Conectar
      </Button>
    </Form>
  );
}

export default Ingresar;