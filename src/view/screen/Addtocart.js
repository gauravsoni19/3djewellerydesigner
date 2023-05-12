import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Cart() {

    const [data, setData] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {})
            console.log(res.data);
            setData(res.data)
        }
        show()
    }, [])

    function removeitem(index) {
        console.log(index);
        setData(data.map((d, index1) => {
            return index !== index1 && d
        }))

    }
    console.log(data);
    return (
        <Container fluid>

            <Row className="justify-content-center">
                {
                    <Col className="col-lg-6">
                        {
                            data ? data.map((d, index) => {
                                if (d !== false) {
                                    return (
                                        <div className="border">
                                            <div className="addtocartshow d-flex">
                                            <div className="addtocartshow-img">
                                                <img src={d.image} style={{ width: '100%', height: '200px' }} />

                                            </div>
                                            <div className="addtocartshow-text ">
                                                <p>{d.name}</p>
                                                <p>Price : {d.price}</p>
                                                <p>Qty : {1}</p>
                                                <p>{d.delivery}</p>
                                                <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>


                                            </div>

                                            <div className="addtocartshow-text">

                                            </div>
                                        </div>
                                        </div>
                                        

                                    )
                                }
                            }) : null
                        }
                    </Col>
                }

<center><Link className="buynow" to="/Payment"> <Button>Proceed to Payment</Button></Link></center>
            </Row>

            <br /> <br />
            <br /> <br />

            <br /> <br />
            <br /> <br />
        </Container>

    )
}


