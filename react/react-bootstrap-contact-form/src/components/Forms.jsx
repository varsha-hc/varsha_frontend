import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Forms() {
  return (
    
        <Table striped border={"1"}  style={{height:"300px", width:"660px", marginLeft:"450px", marginTop:"100px", backgroundColor:"white"}}>
            <tr>
                <td>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label><br/>
        <Form.Control type="text" placeholder="Enter your name" /><br/>
        <Form.Label>Phone</Form.Label><br/>
        <Form.Control type="text" placeholder="Enter your phone number"/><br/>
        <Form.Label>Email</Form.Label><br/>
        <Form.Control type="email" placeholder="Enter your email id"/>
      </Form.Group>
     
    </Form>
    </td>
    <td>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label><br/>
        <Form.Control as="textarea" rows={8} cols={30}/>
      </Form.Group>
    </td>
         </tr>
            <tr >
                <td colSpan={5}>
                    <Button className="btn btn-primary" style={{marginLeft:"220px", marginBottom:"10px", width:"230px", backgroundColor:"Blue", color:"white"}}>Get Started</Button>
                </td>
            </tr>
        </Table>
  );
}

export default Forms;
 
