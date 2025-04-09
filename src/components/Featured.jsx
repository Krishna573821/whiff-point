import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice"; 
import "./Featured.css";
import { toast } from "react-toastify";

const Featured = () => {
   const dispatch = useDispatch();

   const products = [
      { id: 1, name: "Dal Makhani", image: "/images/featured/angara mushroom.jpg", price: 200 },
      { id: 2, name: "Butter Chicken", image: "/images/featured/angara mushroom.jpg", price: 300 },
      { id: 3, name: "Noodles", image: "/images/featured/angara mushroom.jpg", price: 150 },
      { id: 4, name: "Manchurian", image: "/images/featured/angara mushroom.jpg", price: 100 },
      { id: 5, name: "Chowmein", image: "/images/featured/angara mushroom.jpg", price: 250 },
      { id: 6, name: "Hakka Noodles", image: "/images/featured/angara mushroom.jpg", price: 120 },
   ];

   const handleAddToCart = (product) => {
      toast.info("Food Item added to cart");
      dispatch(addToCart(product));
   };

   return (
      <div className="featured-products">
         <h3>Featured Products</h3>
         <div className="product-grid">
            {products.map((product) => (
               <div 
                  key={product.id} 
                  className="product-card" 
                  onClick={() => handleAddToCart(product)}
               >
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-name">{product.name}</div>
                  <div className="add-to-cart-text">Add to Cart</div>
               </div>
               
            ))}
         </div>
      </div>
   );
};

export default Featured;
