import logo from '../Assets/logo.png';
//import cartIcon from '../Assets/cart_icon.png'; // Import your cart icon image
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';


function Navbar({ cart , handleAddToCart }){
    return(
        <div className="navbar">
            <div className="logo">             
                <img src={logo} className="glammart-logo" alt="logo" />
            </div>
           
                <ul>
                    {/* <li><Link to='/'>Home</Link></li> 
                    <li><Link to='about'>About Us</Link></li>
                     <li><Link to='body'>Products</Link></li>  
                    <li><Link to='contact'>Contact Us</Link></li> */}
                    <li><a href="#Header">Home</a></li>
                    <li><a href="#About">About Us</a></li>
                    <li><a href="#Body">Products</a></li>
                    <li><a href="#Footer">Contact Us</a></li>
                    <li> <Link to="/login">Login</Link></li>
                  
                   
                   </ul>
                    
                       <div className="cart-icon">
                            {/*  🛒 Cart ({cart.length}) Display cart count */}
                             {/* Cart Functionality */}
                        <AddToCart cart={cart} handleAddToCart={handleAddToCart} />      
                    </div>
              
            </div>
    )
}
export default Navbar;
