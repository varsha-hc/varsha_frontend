import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MyCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
      {props.designation}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;