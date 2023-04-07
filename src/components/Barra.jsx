import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import{ Container, Nav, Navbar, Form} from 'react-bootstrap';





function Barra() {
  return (
    <Navbar className='barra' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home"><img src={logo} alt="logo" style={{height:'70px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight:'100px' }}
             navbarScroll
           >

             <NavLink className='menu' to="/Home">Inicio</NavLink>   
             <NavLink className='menu' to="/publicaciones">Vehiculos Publicados</NavLink>
             <NavLink className='menu' to='/nuevos'>Nuevos</NavLink>
             <NavLink className='menu' to='/usados'>Usados</NavLink>
          </Nav>

           <Form className="d-flex">
              <NavLink to='/ingresar'><Button className="btnBarra">Ingresar</Button></NavLink>     
              <NavLink to='/registrar'><Button className="btnBarra">Registar</Button></NavLink>  
           </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;

