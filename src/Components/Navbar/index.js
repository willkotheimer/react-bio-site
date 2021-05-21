import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
        <div>
        <Navbar dark expand="md" className="justify-content-between">
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                     <ul className="navbar-nav mr-auto">
                       <li className="nav-item active">
                         <a className="nav-link" href="#bio">About</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#projectAnchor">Projects</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#techUsed">Technologies</a>
                       </li>
                     </ul>
                </Nav>
            </Collapse>
        </Navbar>
        </div>

  );
}
