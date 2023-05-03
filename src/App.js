import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./view/screen/Home";
import About from "./view/screen/About";
import Details from "./view/screen/Details";
import Contact from "./view/screen/Contact";
import Service from "./view/screen/Service";
import Register from "./view/screen/Register";
import Login from "./view/screen/Login";
import Addtocart from "./view/screen/Addtocart";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, Button, Form } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { menubar } from "./view/Data/Data";
import './view/style/style.css'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
console.log(menubar);
function App() {
    const [user, setUser] = useState(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'));

    function Logout() {

        alert('Logout')
        localStorage.setItem('user', false)
        setUser(false)
        localStorage.clear()
    }
    return (
        <>
            <BrowserRouter>
                <Container fluid>

                    <Row>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Container fluid>
                                    <Navbar.Brand href="/">3D JEWELLERY DESIGNER</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav className="me-auto my-2 my-lg-0">
                                            <Nav.Link href="/">Home</Nav.Link>
                                            {
                                                menubar.map(function (d) {
                                                    return <Nav.Link href={`/${d}`}>{d}</Nav.Link>;
                                                })
                                            }
                                            {
                                                user ? null : <>
                                                    <Nav.Link href="/Register">Register</Nav.Link>
                                                    <Nav.Link href="/Login">Login</Nav.Link>
                                                </>
                                            }

                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                            {
                                                user?< Button onClick={Logout}>Logout</Button>:null
                                            }
                                        
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Details" element={<Details />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Service" element={<Service />} />
                    <Route path="/Addtocart" element={<Addtocart />} />
                    {
                        user ? null : <>
                            <Route path="/Register" element={<Register />} />
                            <Route path="/Login" element={<Login />} />
                        </>


                    }



                </Routes>
                <Container fluid>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                    <div className="footer">

                        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                                <div className='me-5 d-none d-lg-block'>
                                    <span>Get connected with us on social networks:</span>
                                </div>

                                <div>
                                    <a href='https://www.facebook.com/3djewellerydesigner' className='me-4 text-reset socialmedia'>
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>
                                    <a href='https://www.instagram.com/3djewellerydesigner/' className='me-4 text-reset'>
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                    <a href='https://www.youtube.com' className='me-4 text-reset'>
                                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                                    </a>
                                    <a href='https://www.twitter.com/cadbygaurav' className='me-4 text-reset'>
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>

                                </div>
                            </section>

                            <section className=''>
                                <MDBContainer className='text-center text-md-start mt-5'>
                                    <MDBRow className='mt-3'>
                                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                            <h6 className='text-uppercase fw-bold mb-4'>
                                                3D JEWELLERY DESIGNER
                                            </h6>
                                            <p>
                                                We provide Jewellery CAD Designing, Rendering and Manufacturing Services.
                                            </p>
                                        </MDBCol>

                                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                            <p>
                                                <a className='text-reset'>
                                                    <Link className='text-reset' to='/Service'>Manual Jewellery Designing</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a className='text-reset'>
                                                    <Link className='text-reset' to='/Service'>Jewellery CAD Designing</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a className='text-reset'>
                                                    <Link className='text-reset' to='/Service'>Jewellery Rendering</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a className='text-reset'>
                                                    <Link className='text-reset' to='/Service'>Jewellery Manufacturing</Link>
                                                </a>
                                            </p>
                                        </MDBCol>

                                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                            <p>
                                                <a href="#" className='text-reset'>
                                                    <Link to="/Service" className="text-reset">Services</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    <Link to="/Contact" className="text-reset"> Contact</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    <Link to="/About" className="text-reset">About</Link>
                                                </a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>
                                                    <Link to="/Register" className="text-reset">Register</Link>
                                                </a>
                                            </p>
                                        </MDBCol>

                                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                            <p>
                                                <MDBIcon icon="house" className="me-3" />
                                                Jaipur 302015,Rajasthan,India
                                            </p>
                                            <p>
                                                <MDBIcon icon="envelope" className="me-3" />
                                                info@example.com
                                            </p>
                                            <p>
                                                <MDBIcon icon="phone" className="me-3" /> +91 9828585712
                                            </p>
                                            <p>
                                                <MDBIcon icon="print" className="me-3" /> +91 9828585712
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </section>

                            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                                © 2023 Copyright:
                                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                                    3D JEWELLERY DESIGNER
                                </a>
                            </div>
                        </MDBFooter>

                    </div>

                </Container>

            </BrowserRouter >
        </>
    )
}
export default App;