import { Container, Row, Col, Carousel, Card, ListGroup } from "react-bootstrap";
import { banner, data, testimonial, } from "../Data/Data";
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";
function Home() {
    const nav = useNavigate()
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Carousel >
                        {
                            banner.map(function (d) {
                                return (
                                    <Carousel.Item interval={1000}>
                                        <div className="slider">
                                            <img
                                                className="d-block w-100"
                                                src={d}
                                                alt="First slide"
                                            />
                                        </div>
                                    </Carousel.Item>
                                )
                            }
                            )

                        }
                    </Carousel></Col>
            </Row>
            <Row>
                {
                    data.map(function (d) {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }} className="cur testimonial-card" >
                                    <Card.Img variant="top" src={d.image} onClick={() => nav('/details', { state: d })} />
                                    <Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Price : {d.price}</ListGroup.Item>
                                        <ListGroup.Item>MRP : <del>{d.mrp}</del> </ListGroup.Item>
                                        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link onClick={() => nav('/details', { state: d })}>Details</Card.Link>
                                        {/* <Card.Link onClick={() => productaddtocart(product)}>Add to Cart</Card.Link> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

            <MDBContainer className="py-5" fluid>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center">
                        <h3 className="mb-4">OUR CUSTOMERS</h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center d-flex align-items-stretch">
                {
                                testimonial.map(function (d) {
                                    return (
                                        <>
                    <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                        <MDBCard className="testimonial-card">

                                            <div
                                                className="card-up"
                                                style={{ backgroundColor: "#9d789b" }}
                                            ></div>
                                            <div className="avatar mx-auto bg-white">
                                                <img
                                                    src={d.image}
                                                    className="rounded-circle img-fluid"
                                                />
                                            </div>
                                            < MDBCardBody >
                                                <h4 className="mb-4">{d.name}</h4>
                                                <hr />
                                                <p className="dark-grey-text mt-4">
                                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                                    {d.detail}
                                                </p>
                                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>
                    </>
                                    )
                                })
                            }
                </MDBRow>
            </MDBContainer>
        </Container >
        

    );
}
export default Home;
