import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import axios from "axios";
function Details() {
    const loc = useLocation()
    const[product,setProduct] = useState(loc.state)
    console.log(product);
    async function productaddtocart(product){
        let params = {
            data:product
        }

        let res = await axios.post("addtocart",params)
        console.log(res.data);
        let {message,success} = res.data
        console.log(success);
        if(success)
        {
            alert(message)
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
                        <h2 className="text-danger padding">{product.price}</h2>
                        <h6 className="padding"><del>{product.mrp}</del></h6>
                    </div>
                    <br /><br />
                    <button value={product} onClick={()=>productaddtocart(product)} className="btn btn-primary mr-2" >Buy Now</button>
                    <button value={product} onClick={()=>productaddtocart(product)} className="btn btn-primary mr-2" >Add to Cart</button>
                    <br /><br /><br /><br /><br /><br /><br />
                </Col>
            </Row>
        </Container>
    );
}
export default Details;
// import {useLocation} from 'react-router-dom'
// import {useState} from 'react'
// import { Row ,Col} from 'react-bootstrap';
// function Details(){
//     const loc =useLocation()
// const[products,setProducts] = useState(loc.state)
// console.log(products);
//     return(
//         <>
//             <Row>
//                 <Col>
//                 <div className="container py-5">
//       <div className="row">
//         <div className="col-md-6">
//           <img src={products.image} alt={products.name} className="img-fluid" />
//         </div>
//         <div className="col-md-6">
//           <h3>{products.name}</h3>
//           <p>Category: {products.category}</p>
//           <p>Description: {products.description}</p>
//           <h4 className="text-danger">${products.price}</h4>
//           <del className="text-muted">${products.mrp}</del>
//           <br />
//           <br />
//           <button className="btn btn-primary mr-2">Buy Now</button>
//           <button className="btn btn-outline-primary" id='btn1'>Add to Cart</button>
//         </div>
//       </div>
//     </div>

//                   </Col>
//             </Row>    
            
//             </>
//     )
// }
// export  default Details
