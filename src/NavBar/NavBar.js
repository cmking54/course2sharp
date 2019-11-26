import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
const NavBar = () => {
    const [links, setLinks] = useState(['Account', 'Courses', 'Sign In']) // TODO: add user sign in
    const addLinks = () => { return links.map(name => <Nav.Link href="#" key={name}>{name}</Nav.Link>) };        
    return (
        <Navbar variant="dark" bg="dark" expand="sm">
        <Navbar.Brand href="#home">course2sharp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {addLinks()}
            {/* {console.log(addLinks()) } */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
}
export default NavBar;