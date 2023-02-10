import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="d-flex">
          <Navbar.Brand href="../../assets/logo.png">Netflix</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">TV Shows</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Movies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Recently Added
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <i className="fa fa-search icons"></i>
                </NavDropdown.Item>
                <div id="kids">KIDS</div>
                <NavDropdown.Item href="#action/3.4">
                  <i className="fa fa-bell icons"></i>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <i className="fa fa-user icons"></i>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
