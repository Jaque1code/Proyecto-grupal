import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src="https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg" alt="logo" style={{height:'40px'}}/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='d-flex justify-content-end'>
          <Nav >
           
               <NavLink href="#Inicio"className="mb-2 mt-1" >
                  <p className='me-5 ' >Inicio</p> 
               </NavLink> 
           

         
               <NavLink >
               <Button variant="primary" className="me-10">Iniciar</Button>{' '} 
               </NavLink> 
             
    
               <NavLink >
               <Button variant="primary"  >Registrar</Button>{' '} 
               </NavLink> 
          
                   


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;

