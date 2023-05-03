import {Form,Button,Container,Row,Col} from "react-bootstrap";
function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} /> <br />
        <Button variant="success">Submit</Button>{''}
      </Form.Group>
    </Form>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Col>
            </Row>
        </Container>

    );
}
export default Contact;
