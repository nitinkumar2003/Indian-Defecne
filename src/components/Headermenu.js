import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

import { AiFillHome } from 'react-icons/ai';

import {Link} from 'react-router-dom'




export default function Headermenu() {
  return (
    <div className="container-fluid">
    <div className="row Headermenu-row">
<div className="col-md-1"></div>
<div className="col-md-10">
  <Navbar collapseOnSelect expand="lg" bg="#e9463a" variant="dark">
  <Container>
  <Navbar.Brand  expand="lg" bg="dimgray" variant="dark"><Link className="headermenu_link" to="/"><AiFillHome /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    <NavDropdown title="About Us +" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutmod">About Mod</Link></NavDropdown.Item>
        
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutbussrules">Allocation of Bussiness rules</Link></NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutformerminister">Former Minister +</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Parliament Matters +" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutmod">Lok Sabha</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutorgch">Organization Chart</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutbussrules">Allocation of Bussiness rules</Link></NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutformerminister">Former Minister +</Link></NavDropdown.Item>
      </NavDropdown>


      <NavDropdown title="Publications +" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutmod">About Mod</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutorgch">Organization Chart</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutbussrules">Allocation of Bussiness rules</Link></NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutformerminister">Former Minister +</Link></NavDropdown.Item>
      </NavDropdown>


      <NavDropdown title="About Us +" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutmod">About Mod</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutorgch">Organization Chart</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutbussrules">Allocation of Bussiness rules</Link></NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutformerminister">Former Minister +</Link></NavDropdown.Item>
      </NavDropdown>


      <NavDropdown title="About Us +" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutmod">About Mod</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutorgch">Organization Chart</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutbussrules">Allocation of Bussiness rules</Link></NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item ><Link className="headermenu_link-dropdown collasible-nav-dropdown" to="/aboutformerminister">Former Minister +</Link></NavDropdown.Item>
      </NavDropdown>


      <Nav.Link href="#features">Official Language Corner</Nav.Link>
      <Nav.Link href="#ricing">Press Released</Nav.Link>
      <Nav.Link href="#pricing">Who's Who</Nav.Link>

       
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
      <div className="col-md-1"></div>
    </div>




    
    </div>
  );
}
