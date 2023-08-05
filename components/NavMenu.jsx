import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-light">
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
            Executive Recruiting Co
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-light"
          />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="text-outline-light navbar-collapse"
          >
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="text-light" eventKey="0">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin"
                className="text-light"
                eventKey="1"
              >
                Admin
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className="text-light"
                eventKey="2"
              >
                Professionals
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavMenu;
