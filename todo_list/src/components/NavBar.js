import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Nav
} from 'reactstrap';
import GoogleAuth from './GoogleAuth';

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light className="navBar">
        <NavbarBrand href="/"><h1>TO-DO App</h1></NavbarBrand>
        <Nav className="mr-0" navbar>
          <NavbarText >
            <div className="justify-content-end">
              <GoogleAuth/>
              </div>
              </NavbarText>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
