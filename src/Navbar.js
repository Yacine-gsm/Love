import React from 'react';

import './navstyle.css'; // Import the CSS f
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MyNavbar() {



  return (
 
      <Navbar   fixed="top" variant="dark" expand="lg"   className='custom-navbar' style={{  marginLeft:'0px ' , margin: '0 auto', display: 'flex', justifyContent: 'center' }} >
        <Container style={{marginLeft:'0px '}}>
          <Navbar.Brand href="#home" style={{ fontSize :'40px' }} ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"   />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav   style={{ marginLeft: '20vw'}} className="ml-auto nav-links">
              <Nav.Link     href="#acceuil" style={{ color :'#000' , fontSize :'24px' }}>Acceuil</Nav.Link>
              <Nav.Link    href="#propos" style={{ color :'#000' , fontSize :'24px' }}>A Propos  </Nav.Link>
              <Nav.Link    href="#service" style={{ color :'#000' , fontSize :'24px' }}>Nos Service</Nav.Link>
              <Nav.Link   href="#projet" style={{ color :'#000' , fontSize :'24px' }}>Nos Projets</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
   
  );
}

export default MyNavbar;


