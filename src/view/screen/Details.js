import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Details() {
    const nav = useNavigate()
    const loc = useLocation()
    const[product,setProduct] = useState(loc.state)
    console.log(product);
    async function productaddtocart(product){
        let params = {
            ...product
        }

        let res = await axios.post("addtocart",params).catch(e=>alert(e))
        console.log(res.data);
        let {message,success} = res.data
        console.log(success);
        if(success)
        {
            alert(message)
            nav('/Addtocart')
        }
        else
        {
            alert(message)
        }
    }
    
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="w-75 p-3">
                    <img src={product.image} alt="" className="productimg"/>
                    </div>
                    
                </Col>
                <Col lg={6}>
                    <div>
                        <h1 className="padding">{product.name}</h1>
                        <h5 className="padding">Category : {product.category}</h5>
                        <h5 className="padding">Metal : {product.description}</h5>
                        <span className="text-danger padding price">₹{product.price}</span><span className="off" >{product.off}</span>
                        <h6 className="padding"><del>₹{product.mrp}</del></h6>
                    </div>
                    <br /><br />
                    <Link className="buynow" to="/Payment"> <Button>Buy Now</Button></Link>
                    <Button variant="outline-primary" value={product} onClick={() => productaddtocart(product)}>Add to Cart</Button>
                    <br /><br /><br /><br /><br /><br /><br />
                </Col>
            </Row>
        </Container>
    );
}
export default Details;
