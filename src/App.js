// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Body from './components/Body'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import ProductsDetails from './components/ProductsDetails'
import LoginPage from './components/LoginPage';
import RegisterPage from "./components/RegisterPage";
import ViewCartProducts from './components/ViewCartProducts';   

function App(){
    const [cart, setCart] = useState([]); // Shared cart state

    //  // Function to add products to the cart
    //  const handleAddToCart = (product) => {
    //     setCart((prevCart) => [...prevCart, product]);
    // };
//     // Function to add products to the cart

    // Increment the quantity of a product in the cart
const handleIncrement = (productId) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    );
};

// Decrement the quantity of a product in the cart
const handleDecrement = (productId) => {
    setCart((prevCart) =>
        prevCart
            .map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
};


const handleAddToCart = (product) => {
    setCart((prevCart) => {
        // Check if the product already exists in the cart
        const existingProduct = prevCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // If the product exists, update its quantity
            return prevCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // If the product doesn't exist, add it to the cart with a quantity of 1
            return [...prevCart, { ...product, quantity: 1 }];
        }
    });
};

    return(
    <>
             {/* Navbar is rendered once for all routes */}
             <Navbar cart={cart} handleAddToCart={handleAddToCart} /> {/* Pass cart to Navbar */}
              
           
         <Routes> 
         <Route path="/" element={
            <> 
            <Header /> <About /> <Body />
            </> 
        }/>  
             {/* <Route path='/' element={<Header/>} />                     
             <Route path='about' element={<About/>} />
             <Route path='body' element={ <Body/> } />                 
             <Route path='contact' element={ <Footer/> } /> */}    
             
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
              

            <Route path='/ProductsDetails/:id' element={
            <ProductsDetails handleAddToCart={handleAddToCart} cart={cart}   /> }
            />  
             <Route path="/cart" element={<ViewCartProducts cart={cart}    handleIncrement={handleIncrement} handleDecrement={handleDecrement} />} /> {/* viewCartproducts route */}
          
         </Routes>
         <Footer/>  
    </>    
    );
}
export default App;