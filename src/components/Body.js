
//fetching api directly
import ProductList from './ProductList';
//import AddToCart from './AddToCart'; // Import AddToCart component
import { useState, useEffect } from 'react';
import CategoryCarousel from './CategoryCarousel'; // Import the CategoryCarousel component

function Body({ handleAddToCart }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // Stores filtered results
    const [searchText, setSearchText] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [showFilterButton, setShowFilterButton] = useState(false); // State to control filter button visibility


    useEffect(() => {
          // Fetch products from the skin-care and beauty-and-fragrances categories
          const fetchProducts = async () => {
            setLoading(true);
            try {
                let combinedProducts = [];

                if (selectedCategory === "all") {
                const beautyResponse = await fetch('https://dummyjson.com/products/category/beauty');
                const fragranceResponse = await fetch('https://dummyjson.com/products/category/fragrances');
                const skinCareResponse = await fetch('https://dummyjson.com/products/category/skin-care');
                const sunglassesResponse = await fetch('https://dummyjson.com/products/category/sunglasses');
               
                const beautyData = await beautyResponse.json();
                const fragranceData = await fragranceResponse.json();
                const skinCareData = await skinCareResponse.json();
                const sunglassesData = await sunglassesResponse.json();

                const combinedProducts = [ ...beautyData.products,...fragranceData.products,...skinCareData.products,...sunglassesData.products];
            } else {
                const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
                const result = await response.json();
                combinedProducts = result.products;
            }
                setData(combinedProducts);// Set initial filtered data to all products
                setFilteredData(combinedProducts); // Store unfiltered data for search
                setShowFilterButton(selectedCategory !== "all");
               // console.log("set data:",combinedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);// Re-fetch data when selectedCategory changes


    const handleFilter = () => {
        const filteredProducts = data.filter(product =>product.category === selectedCategory && product.price > 100);//filter pdts by price on selected category
        setData(filteredProducts);
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value);
         const searchLower = event.target.value.toLowerCase();

        const searchedProducts = data.filter(product => 
            product.title.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.price.toString().includes(searchLower)
           );
           setFilteredData(searchedProducts);
    };

    if (loading) {
        // Show a loading message or spinner while data is being fetched
        return(
            <div className="loading-container">
            <div className="loader"></div>
            <p>Loading products...</p>
        </div>
    );
      }
  
    return (
        < div id="Body">
         
            <div className="search">
                <input 
                    placeholder="Search..." 
                    value={searchText} 
                    onChange={handleSearch} 
                />

               { <button onClick={handleFilter} style={{fontWeight: 600}}>FILTER</button>}
            </div>


             {/* Pass selectedCategory to CategoryCarousel */}
            <CategoryCarousel
                products={data} 
                selectedCategory={selectedCategory} 
                onCategoryChange={setSelectedCategory} 
            />

   {/* Conditionally show the filter button if category is selected */}
   {showFilterButton && (
                <button onClick={handleFilter}>Filter</button>
            )}

     {/* Pass cart state and handleAddToCart to ProductList */}
            <div className="items">
                {data.map(product => (
                    <ProductList key={product.id}  data={product}  handleAddToCart={handleAddToCart} />
                ))}
            </div>

        </div>
    );
}

export default Body;