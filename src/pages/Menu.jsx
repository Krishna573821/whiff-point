import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import "./Menu.css";
import { toast } from "react-toastify";


const Menu = () => {
   const dispatch = useDispatch();

   const categories = [
      { name: "Indian", id: "indian" },
      { name: "Chinese", id: "chinese" },
      { name: "Tandoori", id: "tandoori" },
      { name: "Noodles", id: "noodles" },
      { name: "Rolls", id: "rolls" },
   ];

   const foodItems = {
      indian: [
         {
            id: 1,
            name: "Paneer Tikka Masala",
            image: "/images/menu/Paneer Tikka Masala.jpg",
            price: 220,
         },
         {
            id: 2,
            name: "Butter Chicken",
            image: "/images/menu/butter chicken.jpg",
            price: 240,
         },
         {
            id: 3,

            name: "Dal Makhani",
            image: "/images/menu/Dal Makhani.jpg",
            price: 180,
         },
         {
            id: 4,

            name: "Fish Curry",
            image: "/images/menu/fish curry.jpg",
            price: 130,
         },
      ],
      chinese: [
         {
            id: 5,

            name: "Paneer Manchurian",
            image: "/images/menu/paneer manchurian.jpg",
            price: 110,
         },
         {
            id: 6,

            name: "Fish Fingers",
            image: "/images/menu/fish fingers.jpg",
            price: 200,
         },
      ],
      tandoori: [
         {
            id: 7,

            name: "Tandoori Chicken",
            image: "/images/menu/Tandoori Chicken.jpg",
            price: 220,
         },
         {
            id: 8,
            name: "Paneer Tikka",
            image: "/images/menu/paneer tikka.jpg",
            price: 110,
         },
      ],
      noodles: [
         {
            id: 9,

            name: "Paneer Hakka Noodles",
            image: "/images/menu/Paneer Hakka Noodles.jpg",
            price: 130,
         },
         {
            id: 10,

            name: "Chicken Schezwan Noodles",
            image: "/images/menu/Chicken Schezwan Noodles.jpg",
            price: 180,
         },
      ],
      rolls: [
         {
            id: 11,
            name: "Chicken Keema Roll",
            image: "/images/menu/chicken keema roll.jpg",
            price: 100,
         },
         {
            id: 12,
            name: "Mix Veg Roll",
            image: "/images/menu/mix veg roll.jpg",
            price: 80,
         },
      ],
   };
   

   const location = useLocation();
   const [activeCategory, setActiveCategory] = useState(categories[0].id);

   useEffect(() => {
      if (location.hash) {
         const currentCategory = location.hash.replace("#", "");
         setActiveCategory(currentCategory);

         const element = document.getElementById(currentCategory);
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      }
   }, [location]);

   const handleAddToCart = (item) => {
      dispatch(addToCart(item));
      toast.info("Food Item added to cart!");
   };

   return (
      <div className="menu-page">
         <div className="menu-sidebar">
            <h3>Categories</h3>
            <ul>
               {categories.map((category) => (
                  <li
                     key={category.id}
                     className={activeCategory === category.id ? "active" : ""}
                  >
                     <a
                        href={`#${category.id}`}
                        onClick={() => setActiveCategory(category.id)}
                     >
                        {category.name}
                     </a>
                  </li>
               ))}
            </ul>
         </div>

         <div className="menu-content">
            {categories.map((category) => (
               <div key={category.id} id={category.id} className="menu-section">
                  <h2>{category.name}</h2>
                  <div className="menu-items">
                     {foodItems[category.id].map((item) => (
                        <div key={item.id} className="menu-item">
                           <img src={item.image} alt={item.name} />
                           <div className="desc">
                              <p>{item.name}</p>
                              <p className="price">₹{item.price}</p>
                           </div>
                           <button
                              className="cart-btn"
                              onClick={() => handleAddToCart(item)}
                           >
                              Add to Cart
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Menu;
