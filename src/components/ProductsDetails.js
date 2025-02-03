import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function ProductsDetails({ handleAddToCart, cart }) {

  const {id}=useParams()
  
  //  const [cart, setCart] = useState([]);
  const[Details,setDetails]=useState({});
  console.log(Details);

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>setDetails(data))
  },[]);
  

  const handleAddProductToCart = () => {
    handleAddToCart(Details); // Call handleAddToCart to update the cart state in App.js
  };

  if (!Details) {
    return <p>Loading...</p>;
}
  
  return (
    <>
    {/* <Navbar cart={cart} /> */}
    <div className="cardDetails">
       <div className="image-div">
            <img src={Details.thumbnail}></img>
        </div>
        <div className="pdtDetails">
      <h2>{Details.title}</h2>
      <h5>{Details.brand}</h5>
      <small>{Details.description}</small><br/>
      <small>Ratings: {Details.rating}⭐</small><br/>
            <h4>Price: {Details.price}</h4>
            <h6>Discount: {Details.discountPercentage}%</h6>
            <h4>Additional Information</h4>
            <p>{Details.warrantyInformation}<br/>{Details.shippingInformation} <br/>
            Availability: {Details.availabilityStatus}<br/>
            {Details.returnPolicy}<br/>
           Min. Qty: {Details.minimumOrderQuantity}<br/>

            </p>
          
            <button onClick={handleAddProductToCart}>Add to Cart</button>  
            </div>
    </div>
    </>
  );    
}
export default ProductsDetails;
      