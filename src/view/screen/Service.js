import { Container, Row, Col, } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { service } from '../Data/Data';
function Service() {
    return (
        <Container fluid>
            <Row>
            {
                            service.map(function (d) {
                                return (
                                    <>
                <Col className='MDBcard'>
                    <MDBCard>
                        
                                        <MDBCardImage src={d.image} fluid alt='...' />
                                        <MDBCardBody>
                                            <MDBCardTitle><b>{d.name}</b></MDBCardTitle>
                                            <MDBCardText>
                                                {d.detail}
                                            </MDBCardText>
                                        </MDBCardBody>
 
                    </MDBCard>
                </Col>
                </>
                                )
                            })
                        }
            </Row>
            <br /><br /><br />
        </Container>

    );
}
export default Service;
