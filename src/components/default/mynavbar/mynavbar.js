/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import './mynavbar.scss';

class MyNavbar extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">mv-forchtenstein</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavDropdown className="nav-link-glow-up" title="ÜBER UNS" id="basic-nav-dropdown">
                  <NavDropdown.Item className="nav-link-glow-up" href="/geschichte">DIE GESCHICHTE</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link-glow-up" href="/kapellmeister">DER KAPELLMEISTER</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link-glow-up" href="/vorstand">DER VORSTAND</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link-glow-up" href="/musiker">DIE MUSIKER</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link-glow-up" href="/gedenken">IN GEDENKEN</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-link-glow-up" href="/events">VERANSTALTUNGEN</Nav.Link>
                <Nav.Link className="nav-link-glow-up" href="/musikschulverein">MUSIKSCHULVEREIN</Nav.Link>
                <Nav.Link className="nav-link-glow-up" href="/bilder">GALERIE</Nav.Link>
                <Nav.Link className="nav-link-glow-up" href="/gaestebuch">GÄSTEBUCH</Nav.Link>
                <Nav.Link className="nav-link-glow-up" href="/kontakt">KONTAKT</Nav.Link>
                <Nav.Link className="nav-link-glow-up" href="https://www.facebook.com/mvforchtenstein"><FontAwesomeIcon icon={faFacebookSquare} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}

export default MyNavbar;
