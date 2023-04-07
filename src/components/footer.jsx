import Card from 'react-bootstrap/Card';
import logo from '../img/logo.png'
import{ Navbar, NavLink, Form} from 'react-bootstrap';
import icon from '../img/instagram.svg';
import "../style.css"


function Footer() {
  return (
    <Card className='footer'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Navbar.Brand href="/home"><img src={logo} alt="logo" style={{height:'70px'}}/></Navbar.Brand>
        </blockquote>
      </Card.Body>
      
          <Form className="d-flex">
              <NavLink to='/ingresar'><img src={icon} alt="icon" /></NavLink>     
              <NavLink to='/registrar'></NavLink>  
           </Form>
    </Card>
  );
}

export default Footer;