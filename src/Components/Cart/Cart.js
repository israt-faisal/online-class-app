import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total, cs) => total + cs.price , 0)

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }

    const tax = (total / 8).toFixed(2);
    return (
        <div>
            <h3 className="order">Purchase Summary</h3>
            <div className="cart">
            <p>Course Item: {cart.length} </p>
            <p>Tax: ${tax}</p>
           <p> Course Price: ${total} </p>
           <p>Total Price: ${total + Number(tax)} </p>
            </div>
        </div>
    );
};

export default Cart;