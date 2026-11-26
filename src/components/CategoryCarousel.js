import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
//import Recipes from "./ProductList";


const CategoryCarousel = ({ selectedCategory, onCategoryChange }) => {
    const ctgryImageArray = [
                    "https://m.media-amazon.com/images/I/811+HXJ65WL.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nvVc-DxvizgNZaPL_JiyQHqq7MfW79ZZWg&s",
                    "https://i.pinimg.com/236x/f8/74/d6/f874d64202cabf67adc66fb08d00035f.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrcsbVx5Uxg4olzqp_Wt961Zk0V-Nx8ZCvg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJ9rU2S8kGAcpd1dDCkAVJXFzoUaSNVhjKg&s",
                    "https://5.imimg.com/data5/SELLER/Default/2024/2/392237709/AO/CQ/LJ/9277553/all-cosmetic-and-beauty-products-500x500.png",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuVXPb5L2rx9_RG3g2GM8lMCxCJInhJF47g&s",
                    "https://i.pinimg.com/236x/48/7a/97/487a971f0ca268714488962e45065f64.jpg",

                    "https://i.pinimg.com/236x/fb/01/aa/fb01aa1af1028e3e207c0dd368120517.jpg",
                    "https://i.pinimg.com/236x/65/69/32/65693203671074e51be332f6bbe79c31.jpg",
                    "https://i.pinimg.com/236x/b0/c9/2f/b0c92f5fe61352d2abb32482b7e00148.jpg",
                    "https://i.pinimg.com/736x/36/6d/7d/366d7d64e4f0633df7a740168027d672.jpg"    

    ];
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/category-list");
                const category = await response.json();

                const categoryList = [
                    ...category.slice(0, 2),        // Take first 2
                    ...category.slice(7, 10),       //  (skip 5, take 3)
                    ...category.slice(12, 13),      // (skip 2, take 1)
                    ...category.slice(15,16), 
                    ...category.slice(19)         // Take rest (skip 3)
                  ];

            //console.log(categoryList);//to check whether matching category for images are listing

                setCategories(categoryList);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);


    // const ctgryTitleArray = [
    //     "beauty", "fragrances", "mens-shirts", "mens-shoes",
    //     "mens-watches", "skin-care", "sunglasses", "womens-bags",
    //     "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"
    // ];

    const categoriesWithImages = categories.map((title, index) => ({
        title,
        image: ctgryImageArray[index],
    }));

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1048, settings: { slidesToShow: 8 } },
            { breakpoint: 960, settings: { slidesToShow: 7 } },
            { breakpoint: 600, settings: { slidesToShow: 5 } },
            { breakpoint: 480, settings: { slidesToShow: 3 } },
        ],
    };

    const handleCategoryClick = (categoryTitle) => {
        //console.log("Selected category:", categoryTitle); 
        onCategoryChange(categoryTitle); // This updates the selected category
        //console.log("categoryTitle:",categoryTitle);
    
    };

    return (
        <div className="category-carousel">
            <h2>CATEGORIES</h2>
            <Slider {...settings}>
                {categoriesWithImages.map((category, index) => (
                    <div
                        key={index}
                        className={`item ${selectedCategory === category.title ? "active" : ""}`}
                        onClick={()=> handleCategoryClick(category.title)  }
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            className="category-image"
                        />
                        <h6>{category.title}</h6>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategoryCarousel;