import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';

const Payment = () => {
  const nav = useNavigate()
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts ?? [];
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
  });
  const handleInputChange = (event) => { 
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you could handle submitting the payment information to a server
    // and show a confirmation message to the user
    if(paymentInfo.cardNumber!==''&& paymentInfo.cvv!==''&&paymentInfo.expirationDate!==''&&paymentInfo.name){
    window.alert('Payment successful! Thank you for your purchase.');
    let res = await axios.post('removecartitem', {}).catch(e=>console.log(e))
            console.log(res?.data);

    nav('/')
    }
    else{
      window.alert('Fill all Input.');
      
    }
  };
  

  return (
    <div className="container my-5">
      <h1 className="mb-3">Payment</h1>
      <div className="card">
        <div className="card-header">
          <h5>Order Summary</h5>
        </div>
        <div className="card-body">
          
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="cardNumber">Card Holder's Name</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
          <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={paymentInfo.name}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit Payment
            </button>
            <Link to="/Addtocart" className="btn btn-secondary ml-2">
              Back to Products
            </Link>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;