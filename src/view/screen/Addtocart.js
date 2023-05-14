import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link,useNavigate } from "react-router-dom"
export default function Cart() {
const nav=useNavigate()
    const [data, setData] = useState('')

    useEffect(() => {
        async function show() {
            let res = await axios.post('showtocart', {}).catch(e=>console.log(e))
            console.log(res?.data);
            setData(res?.data)
        }
        show()
    }, [])

 async function removeitem(index) {
        console.log(index);
        let arr=[];
        data.map((d, index1) => {
            if(index !== index1 ){
                    arr.push(d);
            }
        })
console.log(arr);
let res = await axios.post('removecartitem', arr).catch(e=>console.log(e))
            console.log(res?.data);

setData(arr)
    }
    
    console.log(Array.isArray(data));
   

    return (
        <Container fluid>

            <Row className="justify-content-center">
                
                    <Col className="col-lg-6">
                        {
                         data.length>0 &&(  Array.isArray(data) && data!==[] ? data.map((d, index) => {
                                if (!Array.isArray(d)) {
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
                                                <div className="d-flex">
                                                <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                </div>

                                            </div>

                                            <div className="addtocartshow-text">

                                            </div>
                                        </div>
                                        </div>
                                        

                                    )
                                }if(Array.isArray(d)){
                                    return(
                                    d.map(dd=>(
                                        <div className="border">
                                        <div className="addtocartshow d-flex">
                                        <div className="addtocartshow-img">
                                            <img src={dd.image} style={{ width: '100%', height: '200px' }} />

                                        </div>
                                        <div className="addtocartshow-text ">
                                            <p>{dd.name}</p>
                                            <p>Price : {dd.price}</p>
                                            <p>Qty : {1}</p>
                                            <p>{dd.delivery}</p>
                                            <div className="d-flex">
                                                <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                </div>

                                        </div>

                                        <div className="addtocartshow-text">

                                        </div>
                                    </div>
                                    </div>
                                    

                                    ))
                                    )
                                }
                            }) : 
                            
                            data.map((d, index) => {
                                if (d !== []) {
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
                                                <div className="d-flex">
                                                <Button variant="outline-danger" onClick={() => removeitem(index)}>Remove</Button>

                                                <Button variant="outline-danger" onClick={() => nav("/")}>GoBack</Button>
                                                 </div>
                                            </div>

                                            <div className="addtocartshow-text">

                                            </div>
                                        </div>
                                        </div>
                                        

                                    )
                                }
                            }
                      
                            )
                            
 
                        
                    )}
                    </Col>
                <Col>
                <center><Link className="buynow" to="/Payment"> <Button>Proceed to Payment</Button></Link></center>

                </Col>

            </Row>

            <br /> <br />
            <br /> <br />

            <br /> <br />
            <br /> <br />
        </Container>

    )
}


