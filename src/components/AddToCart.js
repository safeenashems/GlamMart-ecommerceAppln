// AddToCart.js
//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../Assets/cart_icon.png';
const AddToCart = ({ cart }) => {
   //  const [isCartVisible, setIsCartVisible] = useState(false); // Controls cart dropdown visibility
     const navigate = useNavigate();

    // // Toggle cart visibility
    // const handleToggleCart = () => {
    //     setIsCartVisible(!isCartVisible);
    // };
      // Redirect to cart page
      const handleNavigateToCart = () => {
        navigate('/cart');
    };

    return (
        <div className="add-to-cart">
            {/* Cart Icon */}
            <div className="cart-icon" onClick={handleNavigateToCart}>
               
                 <img src={cartIcon} className="cart-logo" alt="CART" />
                 <span>{cart.length}</span> 
                 {/* <h2>cart</h2> */} 
                   {/* Show the number of items in the cart */}
             </div>

            {/* Cart Dropdown
            {isCartVisible && (
                <div className="cart-dropdown">
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.title} - ${item.price}
                                </li>
                            ))}
                        </ul>
                    )}
                </div> 
             )} */}
        </div>
    );
};

export default AddToCart;
