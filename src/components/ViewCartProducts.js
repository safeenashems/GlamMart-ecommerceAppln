import React from 'react';

const ViewCartProducts = ({ cart, handleIncrement, handleDecrement  }) => {

    // Calculate the subtotal
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img 
                                    src={item.thumbnail} 
                                    alt={item.title} 
                                    className="cart-item-image" 
                                    style={{ width: '30vw', height: '33vh',  objectFit: 'cover',margin:'2vw' }}
                                />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p><h4>{item.brand}</h4>
                                    <p>Min. Qty: {item.minimumOrderQuantity}</p>
                                    <p> Availability: {item.availabilityStatus}</p>
                                    <h2 className="price">₹{item.price.toFixed(2)}</h2>

                               <div className="cart-quantity">
                                    <button
                                        onClick={() =>
                                            handleDecrement(item.id)
                                        }
                                    >
                                     <p>-</p>  
                                    </button>
                                    <span style={{fontSize: '20px', fontWeight: 'bold',padding:'0px',margin:'0px'}}>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            handleIncrement(item.id)
                                        }
                                    >
                                       <p>+</p>
                                    </button>
                                </div>



                                </div>
                            </div>
                        ))}
                    </div>
                  <div className="cart-subtotal">
                        <h2>Subtotal: ₹{calculateSubtotal().toFixed(2)}</h2>
                    </div> 
                </>
            )}
        </div>
    );
};

export default ViewCartProducts;

