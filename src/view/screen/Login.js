import { Row,Col,Container,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let submitlogin=async()=>{
    
    let params={
      email:email,
      password:password,
    }
    
    console.log(params);
    try {
      let res =await axios.post("login",params).catch(err=>alert(err))
      console.log(res.data);
      
      let {success,message,data} =res.data
      if(success){
      alert(message)
   console.log(data);
     localStorage.setItem('user',true);
      nav("/");
      window.location.reload(true);
      }
      else{
        alert(message)
       }
       } catch (error) {
      alert(error)
    }
    setEmail("")
    setPassword("")
  }
  return(

    <Container>
      <Row>
        <Col>
          <Form>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={submitlogin}>
              LOGIN
            </Button>
          </Form>
          </Col>
      </Row>
    </Container>
  )
}
export default Login;

