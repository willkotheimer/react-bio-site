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
        <Navbar color="dark" dark expand="md" className="justify-content-between">
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                     <ul class="navbar-nav mr-auto">
                       <li class="nav-item active">
                         <a class="nav-link" href="#bio">About</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" href="#projectAnchor">Projects</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" href="#techUsed">Technologies</a>
                       </li>
                     </ul>
                </Nav>
            </Collapse>
        </Navbar>
        </div>

  );
}
