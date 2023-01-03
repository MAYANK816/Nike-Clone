import React from 'react'
import "./Home.css";
const Footer = () => {
  return (
    <div className='Home_Footer'>
        <div className='Home_Footer_Container'>
            <div className='Home_Footer_Container_1'>
                <h3>Nike</h3>
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>FAQ</p>
            </div>
            <div className='Home_Footer_Container_2'>
                <h3>Customer Service</h3>
                <p>Shipping</p>
                <p>Payment</p>
                <p>Return</p>
                <p>Order Tracking</p>
                <p>Help</p>
            </div>
            <div className='Home_Footer_Container_3'>
                <h3>My Account</h3>
                <p>My Account</p>
                <p>Order History</p>
                <p>Wish List</p>
                <p>Newsletter</p>
                <p>Gift Certificates</p>
            </div>
            <div className='Home_Footer_Container_4'>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                <input type="text" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
        
    </div>

  )
}

export default Footer