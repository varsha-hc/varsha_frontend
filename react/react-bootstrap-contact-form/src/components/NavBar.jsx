import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary d-flex">
        <Navbar.Brand className="col-6" href="#home">Bizland.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto col-6 mx-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#home">Portpolio</Nav.Link>
            <Nav.Link href="#home">Team</Nav.Link>
            <Nav.Link href="#home">Dropdown</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </Container>
  );
}
export default NavBar
