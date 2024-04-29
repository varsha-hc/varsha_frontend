import Accordion from 'react-bootstrap/Accordion';
import { Nav } from 'react-bootstrap';

function Contact() {
  return (


    <>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">ContactUS</Nav.Link>
      </Nav.Item>
    </Nav>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Order Tracking</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Return Pickup not Done</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Return a product</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cancel Order</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Return State</Accordion.Header>
      </Accordion.Item>
    </Accordion>
    </>

  );
}

export default Contact;