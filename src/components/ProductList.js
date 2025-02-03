import {Link} from 'react-router-dom';
import ProductsDetails from './ProductsDetails'

function ProductList(props){
   // const {  data } = props;
      {/*  const{img, pdtname, price}=props  */}
       //console.log(props);

    //   if (!data) {
    //     return <p>Product data is missing</p>;
    //    // console.log(props.data);
    // }

    return(
        
    <div className="card">    

       <Link to={`/ProductsDetails/${props.data.id}`}>
        <div className="img-div">
            <img src={props.data.thumbnail} alt={props.data.title}/>
        </div> 

        <div className="pdtInfo">
            <h3>{props.data.title}</h3>
            <h5>{props.data.brand}</h5>
            <small>Ratings: {props.data.rating}</small><br/>
            <small>₹</small><span>{props.data.price}</span>
            <small>  ({props.data.discountPercentage} off) </small><br/>
            <h5>Stock: {props.data.stock}</h5>
             {/* Add the "Add to Cart" button */}

            <button className='ViewDetails'>View Details</button>
        </div>    
       </Link> 
       
    {/*   <button onClick={() => props.handleAddToCart(props.data)}>Add to Cart</button>  */}
            
    
    </div>
   
    )
}
export default ProductList;