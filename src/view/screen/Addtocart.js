// import { Container,Row,Col } from "react-bootstrap";

// function Addtocart() {
//     return (
//         <Container fluid>
//             <Row>
//                 <Col>
//                     <div class="about-section">
//                         <h1 className="about">ABOUT US</h1>
//                         <h2 className="about">We are Jewellery Designers and Manufacturers</h2>
//                         <p className="about">The 3d Jewellery Designer is a team of jewellery Designers and Manufacturers that is redefining modern glamour. Our core principle is to craft high-end jewellery designs that are inspired by the unpredictable and ever-evolving world of contemporary art. We use only the finest materials in our jewellery including gold, silver, diamonds, and precious gems and each piece is handcrafted with meticulous attention to detail.</p>
//                     </div>
//                     <br /><br /><br />
//                 </Col>
//             </Row>
//         </Container>

//     )

// }
// export default Addtocart;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/Data";
const Addtocart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddtocart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    window.alert('Item added to cart.');
  };

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (product) => {
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.id !== product.id
    );
    setSelectedProducts(updatedProducts);
    window.alert('Item removed from cart.');
  };

  // Calculate the total price of all selected data
  const totalPrice = selectedProducts.reduce((acc, curr) => {
    return typeof curr.price === "number" ? acc + curr.price : acc;
  },0);
  
  console.log(totalPrice)

  return (
    <div className="container my-5">
      <h1 className="mb-3">Add to Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Select Products</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {data.map((product) => (
                  <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">${product.price}</p>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddtocart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Cart</h5>
            </div>
            <div className="card-body">
              {selectedProducts.length > 0 ? (
                <ul className="list-group">
                  {selectedProducts.map((product) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      {product.name} = ${product.price}
                      {/* <span className="badge badge-primary badge-pill">
                        {product.price}
                      </span> */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price = ${totalPrice}
                    { <span className="badge badge-primary badge-pill">
                      {totalPrice}
                    </span> }
                  </li>
                </ul>
              ) : (
                <p>No items in cart</p>
              )}
            </div>
            <div className="card-footer">
        
              {/* <Link
                to={{
                  pathname: "/Payment",
                  state: { selectedProducts: selectedProducts },
                }}
                className="btn btn-primary"
              >
                Checkout
              </Link> */}
              <Link to={{ pathname: '/Payment', search: `?totalPrice=${totalPrice}`, state: { selectedProducts } }}
              className="btn btn-primary">Proceed to Payment</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
