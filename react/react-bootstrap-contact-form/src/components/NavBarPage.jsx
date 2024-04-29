import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyCard from "./MyCard";
import { Col, Row } from "react-bootstrap";

function NavBarPage() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className="col-6"  href="#home">Bizland.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#home">Portpolio</Nav.Link>
            <Nav.Link href="#home">Team</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="d-flex justify-content-center mt-5">
      <input type="button" value="TEAM" className="btn btn-primary"></input>
      </Container>
      <h4 align="center" className="mt-5"> Our HardWorking Team</h4>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        tenetur quibusdam dolorum vel beatae facilis architecto quasi amet
        laborum saepe
      </p>
      <Container>
        <Row lg={4}>
       <Col>
       <MyCard
          title="john"
          designation="creater"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        />
       </Col>

<Col>
        <MyCard
          title="doll"
          designation="Dancer"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        />
</Col>
<Col>
        <MyCard
          title="baby"
          designation="Singer"
          image="https://images.unsplash.com/photo-1641244063050-d3e34619fd2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
        />
        </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default NavBarPage;
